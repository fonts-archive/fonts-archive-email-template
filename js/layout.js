document.addEventListener('DOMContentLoaded', () => {
    const wrap = document.getElementById("wrap");

    // 회원가입 인증 메일 제목
    wrap.innerHTML += `
        <div style="width: 600px; background-color: #FFF; border: 1px solid #EEE; padding: 20px 32px; margin:0 auto; margin-bottom: 12px;">
            <div style="font-size: 12px; font-weight: 400; color: #666; text-decoration: underline; text-underline-offset: 4px; margin-bottom: 8px;">"폰트 아카이브" &lt;taedonn@taedonn.com></div>
            <div style="font-size: 18px; font-weight: 700; color: #333;">[폰트 아카이브] 회원가입 인증 메일입니다.</div>
        </div>
    `;

    // 회원가입 인증 메일 내용
    wrap.innerHTML += `
        <div style="width:100%;">
            <div style="width:100%; max-width:600px; margin:0 auto; padding:40px 20px; background-color:#FFF; border:1px solid #EEE; font-family:'Roboto', 'Noto Sans KR'; font-size:16px; font-weight:400; line-height:1.25; color:#000;">
                <div style="width:100%; max-width:400px; margin:0 auto;">
                    <div style="width: 100%; height: 1px; margin-bottom: 48px;"></div>
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

    // 임시 비밀번호 발급 메일 제목
    wrap.innerHTML += `
        <div style="width:100%; height:8px; background-color:#DDD; margin: 60px 0;"></div>
        <div style="width: 600px; background-color: #FFF; border: 1px solid #EEE; margin:0 auto; padding: 20px 32px; margin-bottom: 12px;">
            <div style="font-size: 12px; font-weight: 400; color: #666; text-decoration: underline; text-underline-offset: 4px; margin-bottom: 8px;">"폰트 아카이브" &lt;taedonn@taedonn.com></div>
            <div style="font-size: 18px; font-weight: 700; color: #333;">[폰트 아카이브] 임시 비밀번호가 발급되었습니다.</div>
        </div>
    `;

    // 임시 비밀번호 발급 메일 내용
    wrap.innerHTML += `
        <div style="width:100%; font-family:'Roboto', 'Noto Sans KR'; font-size:16px; font-weight:400; line-height:1.25; color:#000;">
            <div style="width:100%; max-width:600px; background-color:#FFF; margin:0 auto; padding:40px 20px; border:1px solid #EEE; font-size:16px; font-weight:400; line-height:1.25; color:#000;">
                <div style="width:100%; max-width:400px; margin:0 auto;">
                    <div style="width:32px; height:32px; background-color:#000; color:#FFF; font-size:12px; font-weight:400; line-height:1; border-radius:6px; margin:0 auto; text-align:center; line-height:30px;">Aa</div>
                    <h2 style="font-size:20px; font-weight:500; margin:0; margin-top:20px; text-align:center;">
                        임시 비밀번호가 발급되었습니다.
                    </h2>
                    <p style="width:100%; font-size:14px; font-weight:400; line-height:2; color:#3A3A3A; margin:0; margin-top:48px;">
                        안녕하세요 ${"홍길동"}님, <br/>
                        이제 아래 <span style="font-weight:500; color:#000;">임시 비밀번호를 통해</span> 로그인 하실 수 있습니다.
                    </p>
                    <div style="width:100%; padding:16px 20px; margin-top:28px; box-sizing:border-box; background-color:#EEE; font-size:12px; font-weight:500; color:#3A3A3A; text-decoration:none; border-radius:6px;">
                        ${"랜덤 비밀번호"}
                    </div>
                    <p style="width:100%; font-size:14px; font-weight:400; line-height:2; color:#3A3A3A; margin:0; margin-top:28px;">
                        로그인이 되지 않을 경우, <br/>
                        아래 링크에 접속하여 <span style="font-weight:500; color:#000;">임시 비밀번호를 다시 발급</span>받아 주세요. <br/>
                        <a style="text-decoration:none; color:#067DF7;" href="https://fonts.taedonn.com/user/findpw">https://fonts.taedonn.com/user/findpw</a>
                    </p>
                    <div style="width:100%; height:1px; background-color:#EEE; margin-top:48px;"></div>
                    <p style="width:100%; font-size:12px; font-weight:400; line-height:2.5; color:#97989C; margin:0; margin-top:24px;">
                        taedonn - <a style="text-decoration:none; color:#067DF7;" href="https://fonts.taedonn.com">fonts.taedonn.com</a> <br/>
                        check our GitHub repository @<a style="text-decoration:none; color:#97989C;" href="https://github.com/taedonn/fonts-archive">github.com/taedonn/fonts-archive</a> <br/>
                        © 2023. taedonn, all rights reserved.
                    </p>
                </div>
            </div>
        </div>
    `;

    // 폰트 제보하기 자동 응답 메일 제목
    wrap.innerHTML += `
        <div style="width:100%; height:8px; background-color:#DDD; margin: 60px 0;"></div>
        <div style="width: 600px; background-color: #FFF; border: 1px solid #EEE; margin:0 auto; padding: 20px 32px; margin-top: 60px; margin-bottom: 12px;">
            <div style="font-size: 12px; font-weight: 400; color: #666; text-decoration: underline; text-underline-offset: 4px; margin-bottom: 8px;">"폰트 아카이브" &lt;taedonn@taedonn.com></div>
            <div style="font-size: 18px; font-weight: 700; color: #333;">[폰트 아카이브] 폰트를 제보해주셔서 감사합니다.</div>
        </div>
    `;

    // 폰트 제보하기 자동 응답 메일 내용
    wrap.innerHTML += `
        <div style="width:100%; font-family:'Roboto', 'Noto Sans KR'; font-size:16px; font-weight:400; line-height:1.25; color:#000;">
            <div style="width:100%; max-width:600px; background-color:#FFF; margin:0 auto; padding:40px 20px; border:1px solid #EEE; font-size:16px; font-weight:400; line-height:1.25; color:#000;">
                <div style="width:100%; max-width:400px; margin:0 auto;">
                    <div style="width: 100%; height: 1px; margin-bottom: 48px;"></div>
                    <div style="width: 100%; margin: 0 auto;">
                        <div style="margin: 0 auto; width:24px; height:24px; background-color:#000; color:#FFF; font-size:10px; font-weight:400; text-align:center; line-height:22px; border-radius:4px;">Aa</div>
                        <div style="margin: 0 auto; margin-top: 12px; font-size: 14px; text-align: center; color: #3A3A3A;">폰트 아카이브</div>
                    </div>
                    <h2 style="font-size:20px; font-weight:500; text-align: center; color: #3A3A3A; margin-top:4px;">
                        폰트를 제보해주셔서 <span style="color: #000; font-weight: 700;">감사합니다.</span>
                    </h2>
                    <p style="text-align: center; margin-top: 40px;">
                        <img src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/mail.png" alt="메일 아이콘" style="width: 160px;"/>
                    </p>
                    <p style="width:100%; font-size:14px; font-weight:400; line-height:2; color:#3A3A3A; margin:0; margin-top:28px;">
                        제보해주신 내용 관련해서 최대한 빠른 시일 내에 <span style="font-weight:500; color:#000;">답변</span>드리겠습니다. <br/>
                        폰트를 찾을 수 없거나, 저작권 등의 문제로 폰트를 올릴 수 없는 경우, 관련 내용 첨부해 답변 드리겠습니다.
                    </p>
                    <div style="width:100%; padding:16px 20px; margin-top:28px; box-sizing:border-box; background-color:#EEE; font-size:12px; font-weight:500; color:#3A3A3A; text-decoration:none; border-radius:6px;">
                        <div style="text-decoration:underline; font-weight:bold;">제목</div><br/>
                        ${"제목"}
                    </div>
                    <div style="width:100%; padding:16px 20px; margin-top:14px; box-sizing:border-box; background-color:#EEE; font-size:12px; font-weight:500; color:#3A3A3A; text-decoration:none; border-radius:6px;">
                        <div style="text-decoration:underline; font-weight:bold;">내용</div><br/>
                        ${"내용"}
                    </div>
                    <div style="width:100%; height:1px; background-color:#EEE; margin-top:48px;"></div>
                    <p style="width:100%; font-size:12px; font-weight:400; line-height:2.5; color:#97989C; margin:0; margin-top:24px;">
                        taedonn - <a style="text-decoration:none; color:#067DF7;" href="https://fonts.taedonn.com">fonts.taedonn.com</a> <br/>
                        check our GitHub repository @<a style="text-decoration:none; color:#97989C;" href="https://github.com/taedonn/fonts-archive">github.com/taedonn/fonts-archive</a> <br/>
                        © 2023. taedonn, all rights reserved.
                    </p>
                </div>
            </div>
        </div>
    `;
});