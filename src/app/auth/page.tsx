import LoginFormContainer from '@/components/auth/LoginFormContainer';
import styles from '@/styles/auth/auth.module.scss';
import Image from 'next/image';

function Auth() {
    return <div className={styles.container}>
      <div className={styles.main}>
          <div className={styles.login}>

   <div  className={styles.login_form}>
     <h1 className={styles.login_title}>Login</h1>
     <LoginFormContainer />
   </div>
          </div>
        <div className={styles.welcome}>
            <Image src="/assets/images/secure.png" width={0} height={0} sizes={styles.welcome_sticker} className={styles.welcome_sticker} alt='' />
            <div className={styles.welcome_typography_wrapper}>
                <p className={styles.welcome_title}>Welcome to login page</p>
                <p className={styles.welcome_text}>You can sign in to access with</p>
                <p className={styles.welcome_text}>your existing account.</p>
            </div>

        </div>
      </div>
        </div>;
}

export default Auth;