import classes from './sample.module.css'
export default function ClientOnlyComponent() {
  console.log('Client side render!!!')
  return <span className={classes['client-text']}>Client side!!!</span>;
}
