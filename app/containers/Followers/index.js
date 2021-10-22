import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, CardHeader } from 'reactstrap';
import TabsSection from '../shared/tabsSection';


export default function Followers() {
    const handletabClick = (index) => {
        setActiveTab(index)
      }
      const tabs = [
        {
          label: "follower",
          handleClick: handletabClick
        },
        {
          label: "Following",
          handleClick: handletabClick
        },
      ]
     
      const [activeTab, setActiveTab] = useState(0)
    return (

        <div className="container">
            <Row className="mt-4">
                <Col lg="12">
                    <TabsSection data={tabs} activeTab={activeTab} />
                    <Card className="p-3">
                      <CardHeader>
                        <span>Farhan</span>
                        <div className="float-right">
                          <Button>UnFollow</Button>
                        </div>
                      </CardHeader>
                    </Card>
                </Col>
            </Row>
        </div>
    );

}