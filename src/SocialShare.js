//App.js
import styled from "styled-components";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterIcon,
	TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useScript } from "./Hooks";
import { useEffect } from "react";
import kakaoLogo from "./images/kakao.png";

const Popup = styled.div`
	width: 100vw;
	height: 65vh;
	padding-top: 35vh;
	background-color: rgba(0,0,0,0.6);
	position : fixed;
	z-index : 1;
	touch-action : none;
`

// 제목과 버튼을 감싸는 컨테이너
const FlexContainer = styled.div`
	width: 80%;
	max-width: 300px;
	margin: auto;
	border-radius: 30px;
	background-color: #fffaf0;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 48px);
	grid-column-gap: 8px;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
`;

// Style을 적용한 버튼 컴포넌트 추가
const URLShareButton = styled.button`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 18px;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
	}
`;
const KakaoShareButton = styled.a`
	cursor: pointer;
`;

const KakaoIcon = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;

const BackBtn = styled.div`

	cursor: pointer;
	color: #fffaf0;
	background-color: #7e581f;
	
	padding: 2%;
	padding-left: 5%;
	padding-right: 5%;

	border-radius: 20px;

	margin-bottom:	5%;
`;


function SocialShare({setPopupOpen}) {
    // window 객체에서 현재 url 가져오기
	const currentUrl = window.location.href;
	//kakao SDK import 하기
	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

	// kakao sdk 초기화하기
	// status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
	useEffect(() => {
	  if (status === "ready" && window.Kakao) {
		  // 중복 initialization 방지
		  if (!window.Kakao.isInitialized()) {
			  // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
			  window.Kakao.init("687249173015ebd36dbbab09efdc58b6");
		  }
	  }
	}, [status]);

	const handleKakaoButton = () => {
		window.Kakao.Link.sendDefault({
			objectType: 'feed',
			content: {
				title: '말랑술떡이 알려주는 술 MBTI',
				description: '당신의 술을 확인하세요!🤔🍻🍸🥃🍷',
				imageUrl:
					'https://github.com/zmin9/mallang-sulddeok/blob/main/mallangsulddeok/public/home_image.jpg?raw=true',
				link: {
					mobileWebUrl: currentUrl,
					webUrl: currentUrl,
				},
			},
			buttons: [
				{
					title: '결과 보기',
					link: {
						mobileWebUrl: currentUrl,
						webUrl: currentUrl,
					},
				},
				{
					title: '나도 검사하기',
					link: {
						mobileWebUrl: 'https://alcohol-mbti.netlify.app/',
						webUrl: 'https://alcohol-mbti.netlify.app/',
					},
				},
			],
		});
	};


	return (
		<Popup>
			<FlexContainer>
				<h2 style={{color:'#1f170b'}}>공유하기</h2>
				<GridContainer>
					<FacebookShareButton url={currentUrl}>
						<FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
					</FacebookShareButton>
					<TwitterShareButton url={currentUrl}>
						<TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
					</TwitterShareButton>
					<CopyToClipboard text={currentUrl}>
						<URLShareButton>URL</URLShareButton>
					</CopyToClipboard>
					<KakaoShareButton onClick={handleKakaoButton}>
						<KakaoIcon src={kakaoLogo}></KakaoIcon>
					</KakaoShareButton>
				</GridContainer>
				<BackBtn onClick={()=>(setPopupOpen(false))}>닫기</BackBtn>
			</FlexContainer>
		</Popup>
	);
}
  

export default SocialShare;
  