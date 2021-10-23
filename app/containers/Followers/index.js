import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, CardHeader } from 'reactstrap';
import TabsSection from '../shared/tabsSection';
import Followers from './followers';
import Followings from './followings';

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);

  const handletabClick = index => {
    setActiveTab(index);
  };

  const tabs = [
    {
      label: 'Followers',
      handleClick: handletabClick,
    },
    {
      label: 'Following',
      handleClick: handletabClick,
    },
  ];

  return (
    <div className="container">
      <Row className="mt-4">
        <Col lg="12">
          <TabsSection data={tabs} activeTab={activeTab} />
          {activeTab == 0 ? <Followers /> : <Followings />}
        </Col>
      </Row>
    </div>
  );
}
