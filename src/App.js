import React from "react";
import styled from "styled-components";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api/";
import image from "./images/image.png";
import { useState, useEffect } from "react";
import { CovidProvider } from "./context/covidContext";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled.image`
  width: 370px;
  margin-top: 50px;
`;

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const data = await fetchData(country);
      setData(data);
    };
    fetcher();
  }, [country]);

  const handleCountryChange = (e) => {
    setCountry(e.value);
  };

  render() {
  const { data, country } = this.state;

    return (
      <>
        <CovidProvider>
          <StyledContainer>
            <StyledImage src={image} alt={"COVID-19"} />
            <Cards data={data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country} />
          </StyledContainer>
        </CovidProvider>
      </>
    );
  }
}

export default App;
