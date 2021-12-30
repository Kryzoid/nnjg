import React from 'react';
import { Result, Typography } from 'antd';

const Oops = ({ error, message = 'An unexpected error occurred'}) => (
  <Result
    status="warning"
    title={message}
    extra={Boolean(error) && (
      <Typography.Paragraph>
        <pre>{error.toString()}</pre>
      </Typography.Paragraph>
    )}
  />
);

export default Oops;
