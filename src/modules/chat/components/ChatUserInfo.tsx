import clsx from 'clsx';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { HiOutlineLogout as SignOutIcon } from 'react-icons/hi';

import { auth } from '@/common/libs/firebase';

const ChatUserInfo = ({ isWidget = false }: { isWidget?: boolean }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const userName = user?.displayName ?? null;
  const userEmail = user?.email ?? null;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return user ? (
    <div
      className={clsx(
        'flex flex-col items-start gap-2 px-4 pb-3 text-sm md:flex-row md:items-center',
        isWidget && 'text-xs',
      )}
    >
      <div className='flex flex-wrap gap-1 text-neutral-500'>
        <p>Signed in as</p>
        <p className='font-medium'>{userName}</p>
        <p>({userEmail})</p>
      </div>
      {!isWidget && (
        <>
          <div className='hidden text-neutral-500 md:block'>•</div>
          <div
            onClick={handleSignOut}
            className='flex cursor-pointer items-center gap-1 font-medium text-red-500'
            data-umami-event='Sign Out from Chat Page'
          >
            <SignOutIcon size={16} className='cursor-pointer text-red-500' />
            <span>Sign Out</span>
          </div>
        </>
      )}
    </div>
  ) : null;
};

export default ChatUserInfo;
