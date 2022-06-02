import React, { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

export default function Profile() {
 
  return (
    <div>
      <Authenticator signUpAttributes={[]}>
        {({ signOut, user }) => (
          <div>
            <h2>Welcome, { user && user.username }</h2>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  )
}