```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default async function About() {
  const router = useRouter();
  
  const handleClick = async () => {
    await router.push('/'); 
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
    </div>
  );
}
```