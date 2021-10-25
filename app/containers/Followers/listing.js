import React from 'react';
import { Card, CardHeader, Button } from 'reactstrap';

export default function Listing(props) {
  const { pageData, msg, isFollower } = props;

  return (
    <>
      {pageData.length ? (
        pageData.map(data => {
          return (
            <Card className="p-3" key={`followers_${data.followd_on}`}>
              <CardHeader>
                <span>{data.id}</span>
                {isFollower ? (
                  <div className="float-right">
                    <Button>UnFollow</Button>
                  </div>
                ) : null}
              </CardHeader>
            </Card>
          );
        })
      ) : (
        <h2 className="mt-3 text-center">{msg}</h2>
      )}
    </>
  );
}
