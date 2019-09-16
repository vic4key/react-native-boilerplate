// Global Imports
import * as React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";

// Local Styles
import { Container, ApodImage } from "./styled";
import { ContainerCenter } from "@Styled";
import { IHomePage } from "@Interfaces";

const Apod: React.FunctionComponent<IHomePage.IProps> = () => {
    const home = useSelector((state: IStore) => state.home);
    return (
        <Container>
            <ContainerCenter>
                <ApodImage
                    source={{
                        uri: home.image.url,
                    }}
                    resizeMode={"contain"}
                />
            </ContainerCenter>
        </Container>
    );
};

export default Apod;
