import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MdMoreHoriz } from 'react-icons/md';
import { FaRegComment, FaRegHeart, FaRegBookmark } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsEmojiSmile } from 'react-icons/bs';

const Feed = (props) => {
  const { image, userName, comments } = props;

  const [text, setText] = useState('');
  const [enableButton, setEnableButton] = useState(false);
  const [commentList, setCommentList] = useState(comments);
  const [isLoad, setIsLoad] = useState(true);

  const commentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    onLoadHandler();
    handleEnableButton();
  }, [text, enableButton]);

  const onLoadHandler = () => {
    const loadImage = new Image();
    loadImage.src = image;
    loadImage.onload = () => {
      setIsLoad(false);
    };
  };

  const handleText = () => {
    setText(commentRef.current.value);
  };

  const handleEnableButton = () => {
    if (buttonRef.current != null) {
      if (text != '') {
        setEnableButton(true);
        buttonRef.current.disabled = false;
      } else {
        setEnableButton(false);
        buttonRef.current.disabled = true;
      }
    }
  };

  const findLastItem = () => {
    const lastItem = commentList[commentList.length - 1];
    if (lastItem != undefined) {
      return lastItem.id + 1;
    } else {
      return 1;
    }
  };

  const addComment = () => {
    if (text != '') {
      setCommentList([
        ...commentList,
        {
          id: findLastItem(),
          userName: 'testName',
          comment: text,
        },
      ]);
    }
  };

  const inputEnter = (e) => {
    if (e.keyCode === 13) {
      addComment();
      setText('');
    }
  };

  const handleOnClick = () => {
    addComment();
    setText('');
  };

  if (isLoad) return <></>;

  return (
    <Container>
      <Content>
        <ContentTop>
          <ProfileImageCircle></ProfileImageCircle>
          <WriterName>{userName}</WriterName>
          <Button>
            <MdMoreHoriz size={20} />
          </Button>
        </ContentTop>
        <ContentImage>
          <FeedImage>
            <img src={image} />
          </FeedImage>
        </ContentImage>
        <ContentBottom>
          <ButtonBox>
            <Button>
              <FaRegHeart size={24} />
            </Button>
            <Button>
              <FaRegComment size={24} />
            </Button>
            <Button>
              <IoPaperPlaneOutline size={24} />
            </Button>
          </ButtonBox>
          <Button>
            <FaRegBookmark size={24} />
          </Button>
        </ContentBottom>
        <ContentText>
          <LikeCount>좋아요 0개</LikeCount>
          <CommentsWrap>
            {commentList?.map((data) => (
              <CommentInbox key={data.id}>
                <CommentName>{data.userName}</CommentName>
                <CommentText>{data.comment}</CommentText>
              </CommentInbox>
            ))}
          </CommentsWrap>
          <AddCommentWrap>
            <EmojiButton>
              <BsEmojiSmile size={24} />
            </EmojiButton>
            <CommentInput
              type="text"
              ref={commentRef}
              placeholder="댓글달기..."
              onChange={handleText}
              value={text}
              onKeyUp={inputEnter}
            />
            <CommentButton
              ref={buttonRef}
              enable={enableButton}
              onClick={handleOnClick}
            >
              게시
            </CommentButton>
          </AddCommentWrap>
        </ContentText>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

const ContentTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const ContentImage = styled.div`
  width: 100%;
`;

const ContentBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const ContentText = styled.div`
  width: 100%;
`;

const ProfileImageCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #ddd;
  flex-shrink: 0;
  margin-right: 10px;
`;

const WriterName = styled.p`
  font-weight: bold;
  flex-basis: 100%;
  font-size: 1rem;
  padding-top: 2px;
`;

const Button = styled.button`
  background-color: white;
  cursor: pointer;
  padding: 0 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FeedImage = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const LikeCount = styled.p`
  width: 100%;
  padding: 10px 15px;
`;

const CommentsWrap = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const CommentInbox = styled.div`
  padding: 5px 15px;
`;

const CommentName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  padding-right: 10px;
`;

const CommentText = styled.span`
  font-size: 1rem;
`;

const AddCommentWrap = styled.div`
  border-top: 1px solid #e3e3e3;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EmojiButton = styled.button`
  flex-shrink: 0;
  background-color: white;
  cursor: pointer;
  padding: 0;
  padding-right: 10px;
`;

const CommentInput = styled.input`
  font-size: 1rem;
  flex-basis: 100%;
`;

const CommentButton = styled.button`
  background-color: white;
  color: ${(props) => (props.enable ? '#1d88fe' : 'skyblue')};
  cursor: ${(props) => (props.enable ? 'pointer' : 'default')};
  font-size: 1rem;
  flex-shrink: 0;
`;

export default Feed;
