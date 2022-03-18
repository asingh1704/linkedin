import styled from "styled-components";

const Main = () =>{
    return (
        <Container>
            <PostBox>
                <div>
                    <img src='/images/user.svg' />
                    <button>SHare apost</button>
                </div>

                <div>
                    <button>
                        <img src='/images/google.svg' />
                        <span>Photo</span>
                    </button>

                    <button>
                        <img src='/images/google.svg' />    
                        <span>Write Article</span>
                    </button>

                    <button>
                        <img src='/images/google.svg' />    
                        <span>Video</span>
                    </button>

                    <button>
                        <img src='/images/google.svg' />    
                        <span>Event</span>
                    </button>
                </div>
            </PostBox>

            <div>
                <Articles>
                    <SharedActor>
                        <a>
                            <img src="/images/user.svg" />
                            <div>
                                <span>abhinav singh</span>
                                <span>abhinav.singh@gmail</span>
                                <span>12/12/2012</span>
                            </div>
                        </a>
                        <button>
                            <img src='images/ellipsis.svg' />
                        </button>
                    </SharedActor>
                    <Thought>New movie coming</Thought>
                    <PostImg>
                        <a>
                            <img src='/images/Avengers.jpg' />
                        </a>
                    </PostImg>
                    <Popularity>
                        <li>
                            <button>
                                <img src='https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt' />
                                <img src='https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8' />
                                <img src='https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22' />
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a>75 comments</a>
                        </li>
                    </Popularity>
                    <SocialActions>
                    <button>
                        <img src='/images/like-icon.svg' />
                        <span>Like</span>
                    </button>
                    <button>
                        <img src='/images/comment-icon.svg' />
                        <span>Comment</span>
                    </button>
                    <button>
                        <img src='/images/send-icon.svg' />
                        <span>Send</span>
                    </button>
                    <button>
                        <img src='/images/share-icon.svg' />
                        <span>Share</span>
                    </button>
                    </SocialActions>
                </Articles>
            </div>
        </Container>
    )   
}

const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
`;

const PostBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    background-color: #fff;

    div {
        button {
            color: grey;
            border: none;
            outline: none;
            font-size: 14px;
            line-height: 1.5;
            background: transparent;
            display: flex;
            align-items: center;
        }

        &:first-child{
            display: flex;
            padding: 8px 16px 0 16px;
            img {
                width:48px;
                border-radius: 50%;
                margin-right: 8px;
            }

            button{
                border:1px solid;
                border-radius: 35px;
                flex-grow: 1;
                padding-left: 16px;
            }
        }

        &:nth-child(2)
        {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button {
                img {
                    margin: 0 4px 0 -2px
                }
            }
        }
    }
`;

const Articles = styled(CommonCard)`

`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;

    a {
        display: flex;
        text-decoration: none;
        overflow: hidden;
        flex-grow: 1;
        img {
            width:48px;
            height:48px;
        }

        & > div{
            display:flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            overflow: hidden;
            margin-left: 8px;
            span{
                text-align:left;
                font-size: 13px;
            }
        }
    }

    button{
            border:none;
            outline:none;
            top:0;
            background: transparent;
            position: absolute;
            right:12px;
    }
`;

const Thought = styled.div`
    padding:0 16px;
    overflow: hidden;
    color: grey;
    font-size: 14px;
    text-align: left;
`;

const PostImg = styled.div`
    display: block;
    background-repeat: no-repeat;
    width: 100%;
    position:relative;

    img{
        width: 100%;
        height:100%;
        object-fit: contain;
    }
`

const Popularity = styled.ul`
    line-height: 1.3;
    display:flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    list-style: none;

    li{
        margin-right: 5px;
        font-size: 12px;
        button{
            display: flex;
            background: transparent;
            border:none;
        }
    }
`;

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin: 0;
    height: 40px;
    padding: 4px 8px;

    button{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
        color: grey;
        margin-left: 12px;
        height: 40px;
        width: 100px;
        background: transparent;
        border: none;
        font-size: 16px;
    }
`;

export default Main;