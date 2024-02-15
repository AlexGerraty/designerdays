import { Typography } from 'antd'
export default function Moto() {
  const { Title } = Typography;
    return (
    <div style={{ backgroundColor: "#c0c0c0	", margin: "auto" , display: "flex", flexDirection: "column", height: "500px" }}>
      <Title level= {3} style={{ margin: "100px 0 0 100px"}}>affordable access to leading</Title>
      <br></br>
      <Title level= {3} style={{ margin: "20px 0 0 100px"}}>garden designers in Melbourne.</Title>
        <input placeholder='Search' style={{ margin: "100px 0 0 100px", height: "50px", width: "400px", color: "black", backgroundColor: "#ffe4c4", border: "none", fontSize: "20px"}}></input>
      </div>
    )
}