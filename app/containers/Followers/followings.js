import React, { useState, useEffect } from 'react';
import {
    getFollowedByAction, unFollowAction, userFollowAction
} from './redux/actions';
import { Card, CardHeader, Button, Spinner, Row, Col } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';


function FollowBtn(props) {
    const { data, index, handleClick, isFollowLoading } = props;
    if (typeof data.isFollowing == "undefined" || data.isFollowing === false) {
        return (
            <Button
                className="btn btn-primary w-md waves-effect waves-light text-white btn btn-secondary"
                disabled={isFollowLoading}
                onClick={() => handleClick(data, index)}
            >
                Unfollow
            </Button>
        )
    } else {
        return (
            <Button
                className="btn btn-primary w-md waves-effect waves-light text-white btn btn-secondary"
                disabled={isFollowLoading}
                onClick={() => handleClick(data, index)}
            >
                Follow
            </Button>
        )
    }
}

export default function Followings() {
    // useInjectSaga({ key: 'userInfoSagas', saga: userInfoSagas });
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isFollowLoading, setFollowLoading] = useState(false);

    const [followingData, setFollowingData] = useState([])
    const [pageNo, setPageNo] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const followedBy = useSelector(state => state["userInfo"].followed_by)

    const handleUnFollow = (data, index) => {
        setFollowLoading(true)
        if (typeof data.isFollowing == "undefined" || data.isFollowing === false) {
            dispatch(unFollowAction({
                id: data.followed.id,
                setFollowLoading: setFollowLoading,
            }))
        } else {
            dispatch(userFollowAction({
                id: data.followed.id,
                setFollowLoading: setFollowLoading,
            }))
        }
        let temp = [...followingData];
        let isFollowingType = typeof temp[index].isFollowing;
        temp[index] = { ...temp[index], "isFollowing": isFollowingType == "undefined" ? true : !temp[index].isFollowing };
        setFollowingData([...temp]);
    }

    useEffect(() => {
        if (followedBy) {
            if (pageNo === 1) {
                setFollowingData([...followedBy.results])
            } else {
                setFollowingData([...followingData, ...followedBy.results])
            }
            setHasMore(followedBy.next ? true : false)
        }
    }, [followedBy])

    useEffect(() => {
        setIsLoading(true)
        dispatch(getFollowedByAction({
            pageNo,
            setIsLoading
        }))
    }, [pageNo])

    return (
        <InfiniteScroll
            dataLength={followingData.length} //This is important field to render the next data
            next={() => setPageNo(pageNo + 1)}
            hasMore={hasMore}
            loader={<Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            {
                followingData.length ? followingData.map((data, index) => {
                    return (
                        <Card className="p-3" key={`followed_${data.followd_on}_${data.id}`}>
                            <CardHeader>
                                <Row>
                                    <Col md="6">
                                        <div className="d-flex">
                                            <img
                                                width="50"
                                                src={data.followed.profile_image}
                                            />
                                            <div className="ms-3">
                                                <h6>{data.followed.username}</h6>
                                                <small>{data.followed.email}</small>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md="6">
                                        <div className="float-right">
                                            <FollowBtn
                                                data={data}
                                                handleClick={handleUnFollow}
                                                index={index}
                                                isFollowLoading={isFollowLoading}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </CardHeader>
                        </Card>
                    )
                })
                    : <h2 className="mt-3 text-center">{!isLoading ? "No Following" : null}</h2>
            }
        </InfiniteScroll>
    );
}