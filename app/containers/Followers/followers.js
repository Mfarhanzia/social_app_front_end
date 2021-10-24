import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Spinner } from 'reactstrap';
import { getFollowersAction } from './redux/actions';
import userInfoSagas from './redux/saga';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectSaga } from '../../utils/injectSaga';

export default function Followers(props) {
   useInjectSaga({ key: 'userInfoSagas', saga: userInfoSagas });
   const dispatch = useDispatch();
   const [isLoading, setIsLoading] = useState(true);
   const [pageData, setPageData] = useState([])
   const [pageNo, setPageNo] = useState(1);
   const [hasMore, setHasMore] = useState(false);
   const followers = useSelector(state => state["userInfo"].followers)
   const msg = "No one is Following You!"
   useEffect(() => {
      if (followers) {
         if (pageNo === 1) {
            setPageData([...followers.results])
         } else {
            setPageData([...pageData, ...followers.results])
         }
         setHasMore(followers.next ? true : false)
      }
   }, [followers])

   useEffect(() => {
      dispatch(getFollowersAction({
         pageNo,
         setIsLoading
      }))
   }, [pageNo])


   return (
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
         {pageData.length ? pageData.map((data) => {
            return (
               <Card className="p-3" key={`followers_${data.followd_on}`}>
                  <CardHeader>
                     <div className="d-flex">
                        <img
                           width="50"
                           src={data.follower.profile_image}
                        />
                        <div className="ms-3">
                           <h6>{data.follower.username}</h6>
                           <small>{data.follower.email}</small>
                        </div>
                     </div>
                  </CardHeader>
               </Card>
            )
         })
            : <h2 className="mt-3 text-center">{!isLoading ? msg : null}</h2>}
      </InfiniteScroll>
   );
}