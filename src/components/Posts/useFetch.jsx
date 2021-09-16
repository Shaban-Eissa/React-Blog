import React , {useState , useEffect} from 'react' ;

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    setErrMsg(null);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText ? res.statusText : "ERR");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrMsg(error.message);
      });
  }, [url]);

  return {data , loading , errMsg }
};

export default useFetch ;