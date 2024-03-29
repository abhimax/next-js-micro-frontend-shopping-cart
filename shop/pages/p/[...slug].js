import { useRouter } from 'next/router';
import classes from './../shop.module.css';

export default function PDP() {
  const router = useRouter()
  const { slug } = router.query
  return <h1 className={classes.title}>Item detail slug: {slug}</h1>;
}
PDP.getInitialProps = async () => {
  return {};
};
