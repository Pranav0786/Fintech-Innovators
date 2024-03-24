import React from 'react';
import { AuditForm, AuditList, TimeDisplay } from './Audit';

const Auditmain = () => {
  return (
    <div>
      <h1>Auditing Application</h1>
      <TimeDisplay />
      <AuditForm />
      <AuditList />
    </div>
  );
};

export default Auditmain;