import { useState, useEffect } from 'react';
import AnalyticsContent from './AnalyticsContent';
import AnalyticsHeader from './AnalyticsHeader';
import { dataAnalytics } from '../../app/main';

const Analytic = () => {
  const [topicRequest, setTopicRequest] = useState([]);
  const [analyticsDay, setAnalyticsDay] = useState([]);
  const [totalResults, setTotalResults] = useState([]);

  useEffect(() => {
    const topicRequest = JSON.parse(localStorage.getItem('topic'));
    const analyticsDay = JSON.parse(localStorage.getItem('analyticsDayArr'));
    const totalResults = JSON.parse(localStorage.getItem('totalResults'));
    setTopicRequest(topicRequest);
    setAnalyticsDay(analyticsDay);
    setTotalResults(totalResults.totalResults);
  }, []);

  const { count, getAnalyticsData } = dataAnalytics();

  for (let i = 0; i < analyticsDay.length; i += 1) {
    getAnalyticsData(analyticsDay[i], topicRequest);
  }

  function countHeadlines() {
    let sum = 0;
    for (let i = 0; i < count.length; i += 1) {
      sum += count[i];
    }
    return sum;
  }

  return (
    <div>
      <AnalyticsHeader
        topic={topicRequest}
        totalCount={countHeadlines}
        totalRes={totalResults}
      />
      <AnalyticsContent itemNum={count} />
    </div>
  );
};
export default Analytic;
