import { useEffect, useLayoutEffect, useState } from 'react';
import ResumeForm from '../ResumeForm';
import ResumePreview from '../ResumePreview';
import styles from './ResumeContainer.module.css';


function ResumeContainer() {
  const [data, setData] = useState();
  // const [count, setCount] = useState(0);


  // COMPONENT WILL MOUNT
  // useLayoutEffect(()=>{
  //   console.log('useLayoutEffect called');
  //   // Simulate a layout effect, e.g., measuring DOM elements
  //   const element = document.getElementById('layoutEffectTest');
  //   document.title = `Count: ${count}`; // Example of a side effect that runs before paint
  //   if(element){
  //     console.log('Element found:', element);
  //   } else {
  //     console.log('Element not found');
  //   }


  //   return ()=>{
  //     console.log('useLayoutEffect cleanup called');
  //   }

  // }, [])

  // COMPONENT DID MOUNT
//  useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(jsonData => {
//         console.log('Fetched data:', jsonData);
//         setData(jsonData);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });

//       // Cleanup function for component unmount
//       function cleanUp(){
//         console.log('Component unmounted, cleanup done.');
//         // googleAnalitics.cleanup(); // Hypothetical cleanup for Google Analytics
//         localStorage.removeItem('resumeData'); // Clear local storage
//       }

//       return cleanUp;

//  }, [])


// COMPONENT UPDATED
//  useEffect(()=>{
//   if(data){

//       console.log('Data sent to server:', data, count);

//     // fetch('https://jsonplaceholder.typicode.com/posts', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json'
//     //   },
//     //   body: JSON.stringify(data)
//     // })
//     // .then(response => response.json())
//     // .then(jsonData => {
//     //   console.log('Data sent to server:', jsonData, count);
//     // })
//     // .catch(error => {
//     //   console.error('Error sending data to server:', error);
//     // });
//   }

//  }, [data, count])


  

  return (
    <div className={styles.root}>
      {/* {
        data? <div id='layoutEffectTest'>Data Loaded: {data.length} items</div> : <div id='layoutEffectTest'>Loading data...</div>
      } */}
      <div className={styles.formPanel}>
        <ResumeForm
          setData={setData}
        />
        {/* <button onClick={() => setCount(count + 1)}>Increment Count:{count}</button> */}
      </div>
      <div className={styles.previewPanel}>
        <ResumePreview data={data} />
      </div>
    </div>
  );
}


export default ResumeContainer;
