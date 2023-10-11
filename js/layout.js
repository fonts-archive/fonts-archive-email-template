document.addEventListener('DOMContentLoaded', () => {
    const wrap = document.getElementById("wrap");

    // 회원가입 인증 메일 제목
    wrap.innerHTML += `
        <div></div>
    `;

    // 회원가입 인증 메일 내용
    wrap.innerHTML += `
        <div style="width:100%;">
            <div style="width:100%; max-width:600px; padding:40px 20px; background-color:#FFF; border:1px solid #EEE; font-family:'Roboto', 'Noto Sans KR'; font-size:16px; font-weight:400; line-height:1.25; color:#000;">
                <div style="width:100%; max-width:400px; margin:0 auto;">
                    <div style="width: 100%; height: 1px; background-color: #EEE; margin-bottom: 48px;"></div>
                    <div style="width: 100%; margin: 0 auto;">
                        <div style="margin: 0 auto; width:24px; height:24px; background-color:#000; color:#FFF; font-size:10px; font-weight:400; text-align:center; line-height:22px; border-radius:4px;">Aa</div>
                        <div style="margin: 0 auto; margin-top: 12px; font-size: 14px; text-align: center; color: #3A3A3A;">폰트 아카이브</div>
                    </div>
                    <h2 style="font-size:20px; font-weight:500; text-align: center; color: #3A3A3A; margin-top:4px;">
                        회원가입 <span style="color: #000; font-weight: 700;">인증 메일</span>입니다.
                    </h2>
                    <p style="text-align: center; margin-top: 40px;">
                        <img src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/mail.png" alt="메일 아이콘" style="width: 160px;"/>
                    </p>
                    <p style="width:100%; font-size:14px; font-weight:400; text-align: center; line-height:1.8; color:#3A3A3A; margin:0; margin-top:36px;">
                        안녕하세요 ${"홍길동"}님, <br/>
                        아래 버튼을 클릭해서 <span style="font-weight:700; color:#000;">회원가입을 완료</span>해 주세요.
                    </p>
                    <a style="width:200px; display:block; padding:16px 20px; margin: 0 auto; margin-top:20px; box-sizing:border-box; background-color:#000; font-size:14px; font-weight:700; text-align:center; color:#FFF; text-decoration:none; border-radius:6px;" href="https://fonts.taedonn.com?session=${"session_id"}">
                        회원가입 완료하기
                    </a>
                    <div style="width:100%; height:1px; background-color:#EEE; margin-top:48px;"></div>
                    <p style="width:100%; font-size:12px; font-weight:400; line-height:2.5; color:#97989C; margin:0; margin-top:28px;">
                        버튼이 클릭되지 않을 시, <br/>
                        아래 링크를 복사해서 <span style="font-weight:700;">주소창에 입력</span>해 주세요. <br/>
                        <a style="text-decoration:none; color:#067DF7;" href="https://fonts.taedonn.com?session=${"session_id"}">https://fonts.taedonn.com?session=${"session_id"}</a>
                    </p>
                    <div style="width: 20px; height: 2px; background-color: #CDCED2; margin-top: 20px;"></div>
                    <p style="width:100%; font-size:12px; font-weight:400; line-height:2.5; color:#97989C; margin:0; margin-top:24px;">
                        <a style="text-decoration:none; color:#067DF7;" href="https://fonts.taedonn.com">홈페이지</a> · 
                        <a style="text-decoration:none; color:#067DF7;" href="https://fonts.taedonn.com/user/terms">서비스 이용약관</a> · 
                        <a style="text-decoration:none; color:#067DF7;" href="https://fonts.taedonn.com/user/privacy">개인정보 처리방침</a>
                        <br/>© 2023 taedonn, all rights reserved.
                    </p>
                </div>
            </div>
        </div>
    `;
});