/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button } from 'reactstrap';
import messages from './messages';
import { Link } from 'react-router-dom';
import homePageSagas from './redux/saga';
import { getFeedsAction } from './redux/actions';
import { useInjectSaga } from '../../utils/injectSaga';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, CardHeader, Card, CardBody, CardFooter } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import './style.scss'


export default function HomePage(props) {
  const {
    history: { push },
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState([])
  const [pageNo, setPageNo] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();
  useInjectSaga({ key: 'homePageSagas', saga: homePageSagas });
  const feed = useSelector(state => state.homePage)

  useEffect(() => {
    if (feed) {
      setPageData([...pageData, ...feed.feeds.results])
      setHasMore(feed.feeds.next ? true : false)
    }
  }, [feed])

  useEffect(() => {
    setIsLoading(true)
    dispatch(getFeedsAction({
      setIsLoading,
      pageNo
    }))
  }, [pageNo])

  return (
    <>
      <div className="container-fluid bg-white homepage">
        <Row className="align-items-center full-height-row">
          <Col lg="12">
            <h1>
              <FormattedMessage {...messages.header} />
            </h1>
          </Col>
        </Row>
        <Row className="full-height-row">
          <Col lg="4" >
            <section id="sidebar" className="w-50">
              <div>
                <h6 className="p-1 border-bottom tex-center w-50">Options</h6>
                <ul>
                  <li><Link to="/createPost">Create Post</Link></li>
                  <li><Link to="/userDetails">Followers</Link></li>
                  <li><Link to="/createPost">Following</Link></li>
                </ul>
              </div>
            </section>
          </Col>
          <Col lg="6" className="mt-4" >
            <InfiniteScroll
              dataLength={pageData.length} //This is important field to render the next data
              next={() => setPageNo(pageNo + 1)}
              hasMore={hasMore}
              loader={<Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {pageData.map((post, index) => {
                return (
                  <Row key={`post_${post.id}_${index}`}>
                    <Col lg="12" >
                      <Card>
                        <CardHeader>
                          <h2>{post.id}-{post.title}</h2>
                          <div className="underlineDesign" />
                        </CardHeader>
                        {post.post_image ?
                          <CardBody>
                            <img
                              className="img-fluid"
                              src={`${post.post_image}`}
                            />
                          </CardBody>
                          : null}
                        <CardFooter>
                          <p>{post.detail}</p>
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                )
              })}
            </InfiniteScroll>
          </Col>
        </Row>
      </div>
    </>
  );
}
