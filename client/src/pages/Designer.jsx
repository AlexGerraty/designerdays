import { useParams } from "react-router-dom";
import { QUERY_DESIGNERS } from "../utils/queries";
import { useQuery } from "@apollo/client";

// returining 400 error trying to display detailed designer information
    function Designer() {
  const { designerId } = useParams();
  const { loading, error, data } = useQuery(QUERY_DESIGNERS, { variables: { designers: designerId } });
  console.log("Designer ID:", designerId);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :</div>;

  return (
    <div>
      <h1>{data.designers.firstname} {data.designers.lastname}</h1>
      <p>Price: ${data.designers.price} AUD Per Hour</p>
      <p></p>
      
    </div>
  );
}

export default Designer;
