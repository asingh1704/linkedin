import styled from 'styled-components';
import Left from './Left';
import Right from './Right';
import Main from './Main';

const Home = () => {
    return (
        <Container>
            <Section>
                <h5>
                    <a>Hiring in a hurry? - </a>
                </h5>
                <p>
                Find talented pros in record time with Upwork and keep business
                moving.
                </p>
            </Section>

            <Layout>
                <Left />
                <Main />
                <Right />

            </Layout>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 52px;
`;

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top:5px;
    text-decoration: underline;
    h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
    }
    p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }
    @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
    }
`;

const Layout = styled.div`
    display: grid;
    padding-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default Home;