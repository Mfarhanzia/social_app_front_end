import React, { useEffect, useState } from 'react';
import SearchField from 'react-search-field';
import { Row, Col, Card, CardHeader, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { onUserSearchAction } from '../HomePage/redux/actions';
import homePageSagas from '../HomePage/redux/saga';
import { useInjectSaga } from '../../utils/injectSaga';
import { unFollowAction, userFollowAction } from '../Followers/redux/actions';
import userInfoSagas from '../Followers/redux/saga';

import './style.scss';

export default function SearchBar() {
  useInjectSaga({ key: 'homePageSagas', saga: homePageSagas });
  useInjectSaga({ key: 'userInfoSagas', saga: userInfoSagas });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState([]);

  const users = useSelector(state => state['homePage'].searchedUsers);

  useEffect(() => {
    if (users) {
      setPageData([...users.results]);
    }
  }, [users]);

  const handleChange = query => {
    console.log(query);
    dispatch(
      onUserSearchAction({
        query,
        setIsLoading,
      }),
    );
  };

  const handleFollowAction = (data, index) => {
    setIsLoading(true);
    if (data.is_following == '0') {
      dispatch(
        userFollowAction({
          id: data.id,
          setFollowLoading: setIsLoading,
        }),
      );
    } else {
      dispatch(
        unFollowAction({
          id: data.id,
          setFollowLoading: setIsLoading,
        }),
      );
    }
    const temp = [...pageData];
    temp[index] = {
      ...temp[index],
      is_following: temp[index].is_following == '0' ? '1' : '0',
    };
    setPageData([...temp]);
  };

  return (
    <div className="container-fluid">
      <Row className="mt-4 mb-4">
        <Col lg="8" className="m-auto p-auto text-center">
          <div className="m-auto">
            <SearchField
              placeholder="Search users"
              onChange={handleChange}
              onSearchClick={handleChange}
              searchText=""
              classNames="m-auto w-50"
            />
          </div>
        </Col>
      </Row>
      <Row>
        {pageData.length
          ? pageData.map((data, index) => (
              <Col key={`searched_users_${data.id}`} md="8" className="m-auto">
                <Card className="p-3">
                  <CardHeader>
                    <Row>
                      <Col md="6">
                        <div className="d-flex">
                          <img width="50" src={data.profile_image} />
                          <div className="ms-3">
                            <h6>{data.username}</h6>
                            <small>{data.email}</small>
                          </div>
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="float-right">
                          <Button
                            className="btn btn-primary w-md waves-effect waves-light text-white btn btn-secondary"
                            disabled={isLoading}
                            onClick={() => handleFollowAction(data, index)}
                          >
                            {data.is_following == '1' ? 'UnFollow' : 'Follow'}
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </CardHeader>
                </Card>
              </Col>
            ))
          : <p className="text-center">No reults founds</p>}
      </Row>
    </div>
  );
}
