import React from 'react';
import Button from '../Button';
import { useSession, signOut } from 'next-auth/react';
import style from '../Form/Form.module.css';

const UserProfile = () => {
  const { data: session } = useSession();

  return (
    <div>
      <div>
        {session && (
          <>
            <div className={style.center} style={{justifyContent: 'center', paddingTop: '120px'}}>
              <p className={style.login_text} style={{paddingBottom: '10px'}}>Welcome, {session?.user?.email}</p>
              <p style={{color: 'white'}}>Are you sure you want to logout?</p>
              <Button title="Logout" onClick={signOut} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

// why fullName have red underline