import Spline from '@splinetool/react-spline';
import { useEffect } from 'react';

export default function EthereumButton() {
    // <div className="ethereum-button">
    //   <Spline scene="https://prod.spline.design/Mc0rzQ1yiZWtlU64/scene.splinecode" />
    // </div>
    useEffect(() => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.69/build/spline-viewer.js';
      document.body.appendChild(script);
    }, [])
  
    return (
      <div className="ethereum-button">
        <spline-viewer url="https://prod.spline.design/Mc0rzQ1yiZWtlU64/scene.splinecode"></spline-viewer>
      </div>
    );
  }
