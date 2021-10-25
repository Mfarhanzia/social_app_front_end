/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Row,
  Col,
  Spinner,
  CardHeader,
  Card,
  CardBody,
  CardFooter,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';
import './style.scss';
import ReactTimeAgo from 'react-time-ago';
import JavascriptTimeAgo from 'javascript-time-ago';
import { useInjectSaga } from '../../utils/injectSaga';
import { getFeedsAction } from './redux/actions';
import homePageSagas from './redux/saga';
import messages from './messages';

export default function HomePage(props) {
  const {
    history: { push },
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const currentUserId = useSelector(state=>state['Auth']['user'].user_info.id)
  const dispatch = useDispatch();
  useInjectSaga({ key: 'homePageSagas', saga: homePageSagas });
  const feed = useSelector(state => state.homePage);

  useEffect(() => {
    if (feed.feeds) {
      if (pageNo == 1) {
        setPageData([...feed.feeds.results]);
      } else {
        setPageData([...pageData, ...feed.feeds.results]);
      }
      setHasMore(feed.feeds.next);
    }
  }, [feed]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(
      getFeedsAction({
        setIsLoading,
        pageNo,
      }),
    );
  }, [pageNo]);

  return (
    <>
      <div className="container-fluid bg-white homepage">
        <Row className="align-items-center full-height-row">
          <Col lg="12">
            <h1>
              <FormattedMessage {...messages.header} />({pageData.length})
            </h1>
          </Col>
        </Row>
        <Row className="full-height-row">
          <Col lg="4">
            <section id="sidebar" className="w-50">
              <div>
                <h6 className="p-1 border-bottom tex-center w-50">Options</h6>
                <ul>
                  <li>
                    <Link to="/createPost">Create Post</Link>
                  </li>
                  <li>
                    <Link to="/userDetails">User Info</Link>
                  </li>
                  <li>
                    <Link to="/searchUsers">Search Users</Link>
                  </li>
                </ul>
              </div>
            </section>
          </Col>
          <Col lg="6" className="mt-4">
            <InfiniteScroll
              dataLength={pageData.length} // This is important field to render the next data
              next={() => setPageNo(pageNo + 1)}
              hasMore={hasMore}
              loader={
                <Spinner
                  style={{ width: '3rem', height: '3rem' }}
                  type="grow"
                />
              }
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {pageData.map((post, index) => (
                <Row key={`post_${post.id}`}>
                  <Col lg="12">
                    <Card>
                      <CardHeader>
                        <Row>
                          <Col md="1" className="text-center p-0">
                            <img 
                              width="50"
                              className="avatar"
                              src={`${post.user.profile_image}`}
                              alt="profile image"
                            />
                          </Col>
                          <Col md="10 ps-0">
                          <p className="username pt-1">
                            {post.user.id==currentUserId ? "You" :
                              post.user.username
                            }
                           </p>
                          </Col>
                            <h4>
                              {post.title}
                            </h4>
                            <ReactTimeAgo date={new Date(post.created_at)} /><br/>
                            <span><b>{post.is_public ? ` Public` : 'Private'}</b></span><br/>
                        </Row>
                        <div className="underlineDesign" />
                      </CardHeader>
                      {post.post_image ? (
                        <CardBody>
                          <img
                            className="img-fluid"
                            src={`${post.post_image}`}
                          />
                        </CardBody>
                      ) : null}
                      <CardFooter>
                        <p>{post.detail}</p>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              ))}
            </InfiniteScroll>
          </Col>
        </Row>
      </div>
    </>
  );
}
