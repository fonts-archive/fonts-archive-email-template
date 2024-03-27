document.addEventListener('DOMContentLoaded', () => {
    const wrap = document.getElementById("wrap");

    // 회원가입 인증 메일 제목
    wrap.innerHTML += `
        <div style="width:100%; max-width:520px; background-color: #FFF; padding:20px 32px; box-sizing:border-box; margin:0 auto; margin-bottom: 12px;">
            <div style="font-size: 12px; font-weight: 400; color: #666; text-decoration: underline; text-underline-offset: 4px; margin-bottom: 8px;">"폰트 아카이브" &lt;taedonn@taedonn.com></div>
            <div style="font-size: 18px; font-weight: 700; color: #333;">[폰트 아카이브] 회원가입 인증 메일</div>
        </div>
    `;

    // 회원가입 인증 메일 내용
    wrap.innerHTML += `
        <div style="width:100%; background-color: #FFF; font-size: 16px; font-weight: 400; line-height: 1.25; color: #000; font-family: 'Roboto', 'Noto Sans KR', '맑은고딕', Malgun Gothic, '돋움', Dotum, Helvetica, 'Apple SD Gothic Neo', Sans-serif;">
            <div style="width: 360px; max-width: 100%; margin: 0 auto; padding: 80px 28px; box-sizing: border-box;">
                <div style="margin: 0 auto;">
                    <div style="display: table; height: 24px; margin: 0 auto;">
                        <span style="display: table-cell; vertical-align: middle;"><img style="height: 18px; margin-right: 8px;" src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/logo.png"/></span>
                        <span style="display: table-cell; font-size: 16px; font-weight: bold;">폰트 아카이브</div>
                    </div>
                    <h2 style="font-size:20px; font-weight:500; text-align: center; color: #3A3A3A; margin-top:32px;">
                        회원가입 <span style="color: #000; font-weight: 700;">인증 메일</span>입니다.
                    </h2>
                    <div style="text-align: center; margin: 40px 0;">
                        <img src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/3d_high_five.png" alt="메일 아이콘" style="width: 160px;"/>
                    </div>
                    <div style="width: 100%; font-size: 14px; text-align: center; line-height: 1.8; color: #3A3A3A;">
                        안녕하세요 <span style="font-weight: bold; color: #000;">${"홍길동"}</span>님, <br/>
                        아래 버튼을 클릭해서 회원가입을 완료해 주세요.
                    </div>
                    <a style="width: 100%; display: block; padding: 16px 20px; box-sizing: border-box; margin: 0 auto; margin-top: 20px; box-sizing: border-box; background-color: #1B73E7; font-size: 14px; font-weight: bold; text-align: center; color: #FFF; text-decoration: none; border-radius: 6px;" href="https://fonts.taedonn.com/confirm?token=${"email_token"}">
                        회원가입 완료하기
                    </a>
                    <div style="width: 100%; height: 1px; background-color: #D2D4DC; margin: 0 auto; margin-top: 48px;"></div>
                    <div style="width: 100%; font-size: 12px; font-weight: 400; line-height: 2.5; color: #5F6368; margin: 0 auto; margin-top: 28px;">
                        버튼이 클릭되지 않을 시, <br/>
                        아래 링크를 복사해서 <span style="font-weight: 700;">주소창에 입력</span>해 주세요. <br/>
                        <a style="color: #067DF7;" href="https://fonts.taedonn.com/confirm?token=${"email_token"}">https://fonts.taedonn.com/confirm?token=${"email_token"}</a>
                        <div style="width: 20px; height: 2px; background-color: #D2D4DC; margin: 20px 0;"></div>
                    </div>
                    <p style="width: 100%; font-size: 12px; font-weight: 400; line-height: 2.5; color: #5F6368;">
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com">홈페이지</a> · 
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com/terms">서비스 이용약관</a> · 
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com/privacy">개인정보 처리방침</a>
                        <br/>© 2023 - ${new Date().getFullYear()} 태돈, all rights reserved.
                    </p>
                </div>
            </div>
        </div>
    `;

    // 임시 비밀번호 발급 메일 제목
    wrap.innerHTML += `
        <div style="width: 100%; height: 8px; background-color: #DDD; margin: 60px 0;"></div>
        <div style="width: 100%; max-width: 520px; background-color: #FFF; padding: 20px 32px; box-sizing: border-box; margin: 0 auto; margin-bottom: 12px;">
            <div style="font-size: 12px; font-weight: 400; color: #666; text-decoration: underline; text-underline-offset: 4px; margin-bottom: 8px;">"폰트 아카이브" &lt;taedonn@taedonn.com></div>
            <div style="font-size: 18px; font-weight: 700; color: #333;">[폰트 아카이브] 임시 비밀번호 발급</div>
        </div>
    `;

    // 임시 비밀번호 발급 메일 내용
    wrap.innerHTML += `
        <div style="width: 100%; background-color: #FFF; font-size: 16px; font-weight: 400; line-height: 1.25; color: #000; font-family: 'Roboto', 'Noto Sans KR', '맑은고딕', Malgun Gothic, '돋움', Dotum, Helvetica, 'Apple SD Gothic Neo', Sans-serif;">
            <div style="width: 360px; max-width: 100%; margin: 0 auto; padding: 80px 28px; box-sizing: border-box;">
                <div style="width: 100%; margin: 0 auto;">
                    <div style="display: table; height: 24px; margin: 0 auto;">
                        <span style="display: table-cell; vertical-align: middle;"><img style="height: 18px; margin-right: 8px;" src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/logo.png"/></span>
                        <span style="display: table-cell; font-size: 16px; font-weight: bold;">폰트 아카이브</div>
                    </div>
                    <h2 style="font-size: 20px; font-weight: 500; margin-top: 32px; text-align: center;">
                        <span style="font-weight: bold;">임시 비밀번호</span>가 발급되었습니다.
                    </h2>
                    <p style="text-align: center; margin: 40px 0;">
                        <img src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/3d_lock.png" alt="아이콘" style="width: 140px;"/>
                    </p>
                    <p style="width: 100%; font-size: 14px; font-weight: 400; line-height: 2; text-align: center; color: #3A3A3A; margin: 0;">
                        안녕하세요 <span style="font-weight: bold; color: #000;">${"홍길동"}</span>님, <br/>
                        아래 임시 비밀번호를 통해 로그인 하실 수 있습니다.
                    </p>
                    <div style="width: 100%; padding: 16px 20px; box-sizing: border-box; margin: 0 auto; margin-top: 20px; box-sizing: border-box; background-color: #E9F0FE; font-size: 14px; text-decoration: none; border-radius: 6px;">
                        ${"랜덤 비밀번호"}
                    </div>
                    <div style="width: 100%; height: 1px; background-color: #D2D4DC; margin-top: 48px;"></div>
                    <p style="width: 100%; font-size: 12px; font-weight: 400; line-height: 2.5; color: #5F6368; margin: 0; margin-top: 28px;">
                        로그인이 되지 않을 경우, <br/>
                        아래 링크에 접속하여 <span style="font-weight: bold;">임시 비밀번호</span>를 다시 발급받아 주세요. <br/>
                        <a style="color: #067DF7;" href="https://fonts.taedonn.com/user/findpw">https://fonts.taedonn.com/user/findpw</a>
                    </p>
                    <div style="width: 20px; height: 2px; background-color: #D2D4DC; margin: 20px 0;"></div>
                    <p style="width: 100%; font-size: 12px; font-weight: 400; line-height: 2.5; color: #5F6368;">
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com">홈페이지</a> · 
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com/terms">서비스 이용약관</a> · 
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com/privacy">개인정보 처리방침</a>
                        <br/>© 2023 - ${new Date().getFullYear()} 태돈, all rights reserved.
                    </p>
                </div>
            </div>
        </div>
    `;

    // 문의하기 자동 응답 메일 제목
    wrap.innerHTML += `
        <div style="width: 100%; height: 8px; background-color: #DDD; margin: 60px 0;"></div>
        <div style="width: 100%; max-width: 520px; background-color: #FFF; padding: 20px 32px; box-sizing: border-box; margin: 0 auto; margin-bottom: 12px;">
            <div style="font-size: 12px; font-weight: 400; color: #666; text-decoration: underline; text-underline-offset: 4px; margin-bottom: 8px;">"폰트 아카이브" &lt;taedonn@taedonn.com></div>
            <div style="font-size: 18px; font-weight: 700; color: #333;">[폰트 아카이브] 문의 접수 완료</div>
        </div>
    `;

    // 문의하기 자동 응답 메일 내용
    wrap.innerHTML += `
        <div style="width: 100%; background-color: #FFF; font-size: 16px; font-weight: 400; line-height: 1.25; color: #000; font-family: 'Roboto', 'Noto Sans KR', '맑은고딕', Malgun Gothic, '돋움', Dotum, Helvetica, 'Apple SD Gothic Neo', Sans-serif;">
            <div style="width: 360px; max-width: 100%; margin: 0 auto; padding: 80px 28px; box-sizing: border-box;">
                <div style="width: 100%; margin: 0 auto;">
                    <div style="display: table; height: 24px; margin: 0 auto;">
                        <span style="display: table-cell; vertical-align: middle;"><img style="height: 18px; margin-right: 8px;" src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/logo.png"/></span>
                        <span style="display: table-cell; font-size: 16px; font-weight: bold;">폰트 아카이브</div>
                    </div>
                    <h2 style="font-size: 20px; font-weight: 500; margin-top: 32px; text-align: center;">
                        문의해 주셔서 <span style="color: #000; font-weight: 700;">감사합니다.</span>
                    </h2>
                    <p style="text-align: center; margin: 40px 0;">
                        <img src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/3d_love_sign.png" alt="아이콘" style="width: 140px;"/>
                    </p>
                    <p style="width: 100%; font-size: 14px; font-weight: 400; line-height: 2; color: #3A3A3A; margin: 0 auto;">
                        폰트 아카이브를 이용해 주셔서 감사합니다! 문의해주신 내용 검토 후 최대한 빠른 시일 내에 답변드리겠습니다. <br/><br/>
                        부득이하게 문의해주신 내용을 반영하기 어려울 경우, 관련 내용 첨부해서 답변 드리겠습니다. 감사합니다! <br/><br/>
                        - 태돈
                    </p>
                    <div style="width: 100%; height: 1px; background-color: #D2D4DC; margin: 0 auto; margin-top: 48px;"></div>
                    <p style="width: 100%; font-size: 12px; font-weight: 400; line-height: 2.5; margin: 0 auto; margin-top: 28px; color: #5F6368;">
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com">홈페이지</a> · 
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com/terms">서비스 이용약관</a> · 
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com/privacy">개인정보 처리방침</a>
                        <br/>© 2023 - ${new Date().getFullYear()} 태돈, all rights reserved.
                    </p>
                </div>
            </div>
        </div>
    `;

    // 문의 답변 메일 제목
    wrap.innerHTML += `
        <div style="width: 100%; height: 8px; background-color: #DDD; margin: 60px 0;"></div>
        <div style="width: 100%; max-width: 520px; background-color: #FFF; padding: 20px 32px; box-sizing: border-box; margin: 0 auto; margin-bottom: 12px;">
            <div style="font-size: 12px; font-weight: 400; color: #666; text-decoration: underline; text-underline-offset: 4px; margin-bottom: 8px;">"폰트 아카이브" &lt;taedonn@taedonn.com></div>
            <div style="font-size: 18px; font-weight: 700; color: #333;">[폰트 아카이브] 문의 답변</div>
        </div>
    `;

    // 문의 답변 메일 내용
    wrap.innerHTML += `
        <div style="width: 100%; background-color: #FFF; font-size: 16px; font-weight: 400; line-height: 1.25; color: #000; font-family: 'Roboto', 'Noto Sans KR', '맑은고딕', Malgun Gothic, '돋움', Dotum, Helvetica, 'Apple SD Gothic Neo', Sans-serif;">
            <div style="width: 360px; max-width: 100%; margin: 0 auto; padding: 80px 28px; box-sizing: border-box;">
                <div style="width: 100%; margin: 0 auto;">
                    <div style="display: table; height: 24px; margin: 0 auto;">
                        <span style="display: table-cell; vertical-align: middle;"><img style="height: 18px; margin-right: 8px;" src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/logo.png"/></span>
                        <span style="display: table-cell; font-size: 16px; font-weight: bold;">폰트 아카이브</div>
                    </div>
                    <h2 style="font-size: 20px; font-weight: 500; margin-top: 32px; text-align: center;">
                        문의에 대한 <span style="color: #000; font-weight: 700;">답변입니다.</span>
                    </h2>
                    <p style="text-align: center; margin: 40px 0;">
                        <img src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/3d_namaste_sign.png" alt="아이콘" style="width: 140px;"/>
                    </p>
                    <p style="width: 100%; font-size: 14px; font-weight: bold; line-height: 2; margin: 0 auto;">
                        문의 내용
                    </p>
                    <pre style="width: 100%; min-height: 120px; white-space: pre-wrap; word-break: break-all; padding: 16px 20px; box-sizing: border-box; margin: 0 auto; margin-top: 8px; box-sizing: border-box; font-size: 14px; background-color: #E9F0FE; border-radius: 6px; font-size: 14px; background-color: #E9F0FE; border-radius: 6px; font-family: 'Roboto', 'Noto Sans KR', '맑은고딕', Malgun Gothic, '돋움', Dotum, Helvetica, 'Apple SD Gothic Neo', Sans-serif;">${"문의 내용"}</pre>
                    <p style="width: 100%; font-size: 14px; font-weight: bold; line-height:2; margin: 0 auto; margin-top: 40px;">
                        답변
                    </p>
                    <pre style="width: 100%; min-height: 120px; white-space: pre-wrap; word-break: break-all; padding: 16px 20px; box-sizing: border-box; margin: 0 auto; margin-top: 8px; box-sizing: border-box; background-color: #E9F0FE; border-radius: 6px; font-size: 14px; background-color: #E9F0FE; border-radius: 6px; font-size: 14px; background-color: #E9F0FE; border-radius: 6px; font-family: 'Roboto', 'Noto Sans KR', '맑은고딕', Malgun Gothic, '돋움', Dotum, Helvetica, 'Apple SD Gothic Neo', Sans-serif;">${"답변 내용"}</pre>
                    <div style="width: 100%; height: 1px; background-color: #D2D4DC; margin: 0 auto; margin-top: 48px;"></div>
                    <p style="width: 100%; font-size: 12px; font-weight: 400; line-height: 2.5; margin: 0 auto; margin-top: 28px; color: #5F6368;">
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com">홈페이지</a> · 
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com/terms">서비스 이용약관</a> · 
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com/privacy">개인정보 처리방침</a>
                        <br/>© 2023 - ${new Date().getFullYear()} 태돈, all rights reserved.
                    </p>
                </div>
            </div>
        </div>
    `;

     // 문의하기 관리자 메일 제목
     wrap.innerHTML += `
        <div style="width: 100%; height: 8px; background-color: #DDD; margin: 60px 0;"></div>
        <div style="width: 100%; max-width: 520px; background-color: #FFF; padding: 20px 32px; box-sizing: border-box; margin: 0 auto; margin-bottom: 12px;">
            <div style="font-size: 12px; font-weight: 400; color: #666; text-decoration: underline; text-underline-offset: 4px; margin-bottom: 8px;">"폰트 아카이브" &lt;taedonn@taedonn.com></div>
            <div style="font-size: 18px; font-weight: 700; color: #333;">[폰트 아카이브] 고객 문의 내용</div>
        </div>
    `;

    // 문의하기 관리자 메일 내용
    wrap.innerHTML += `
        <div style="width: 100%; background-color: #FFF; font-size: 16px; font-weight: 400; line-height: 1.25; color: #000; font-family: 'Roboto', 'Noto Sans KR', '맑은고딕', Malgun Gothic, '돋움', Dotum, Helvetica, 'Apple SD Gothic Neo', Sans-serif;">
            <div style="width: 360px; max-width: 100%; margin: 0 auto; padding: 80px 28px; box-sizing: border-box;">
                <div style="width:100%; margin:0 auto;">
                    <div style="display: table; height: 24px; margin: 0 auto;">
                        <span style="display: table-cell; vertical-align: middle;"><img style="height: 18px; margin-right: 8px;" src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/logo.png"/></span>
                        <span style="display: table-cell; font-size: 16px; font-weight: bold;">폰트 아카이브</div>
                    </div>
                    <h2 style="font-size: 20px; font-weight: 500; margin-top: 32px; text-align: center;">
                        고객 문의 내용
                    </h2>
                    <p style="text-align: center; margin: 40px 0;">
                        <img src="https://fonts-archive.s3.ap-northeast-2.amazonaws.com/3d_gun_sign.png" alt="아이콘" style="width: 140px;"/>
                    </p>
                    <p style="width: 100%; font-size: 14px; font-weight: bold; line-height: 2; margin: 0 auto;">
                        제목
                    </p>
                    <div style="width: 100%; padding: 16px 20px; box-sizing: border-box; margin: 0 auto; margin-top: 8px; box-sizing: border-box; font-size: 14px; background-color: #E9F0FE; border-radius: 6px;">
                        ${"제목"}
                    </div>
                    <p style="width: 100%; font-size: 14px; font-weight: bold; line-height: 2; margin: 0 auto; margin-top: 40px;">
                        이메일
                    </p>
                    <div style="width: 100%; padding: 16px 20px; box-sizing: border-box; margin: 0 auto; margin-top: 8px; box-sizing: border-box; font-size: 14px; background-color: #E9F0FE; border-radius: 6px;">
                        ${"이메일"}
                    </div>
                    <p style="width: 100%; font-size: 14px; font-weight: bold; line-height: 2; margin: 0 auto; margin-top: 40px;">
                        문의 유형
                    </p>
                    <div style="width: 100%; padding: 16px 20px; box-sizing: border-box; margin: 0 auto; margin-top: 8px; box-sizing: border-box; font-size: 14px; background-color: #E9F0FE; border-radius: 6px;">
                        ${"문의 유형"}
                    </div>
                    <p style="width: 100%; font-size: 14px; font-weight: bold; line-height: 2; margin: 0 auto; margin-top: 40px;">
                        문의 내용
                    </p>
                    <pre style="width: 100%; min-height: 120px; white-space: pre-wrap; word-break: break-all; padding: 16px 20px; box-sizing: border-box; margin: 0 auto; margin-top: 8px; box-sizing: border-box; font-size: 14px; background-color: #E9F0FE; border-radius: 6px; font-family: 'Roboto', 'Noto Sans KR', '맑은고딕', Malgun Gothic, '돋움', Dotum, Helvetica, 'Apple SD Gothic Neo', Sans-serif;">${"문의 내용"}</pre>
                    <div style="width: 100%; height: 1px; background-color: #D2D4DC; margin: 0 auto; margin-top: 48px;"></div>
                    <p style="width: 100%; font-size: 12px; font-weight: 400; line-height: 2.5; margin: 0 auto; margin-top: 28px; color: #5F6368;">
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com">홈페이지</a> · 
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com/terms">서비스 이용약관</a> · 
                        <a style="color: #067DF7;" target="_blank" href="https://fonts.taedonn.com/privacy">개인정보 처리방침</a>
                        <br/>© 2023 - ${new Date().getFullYear()} 태돈, all rights reserved.
                    </p>
                </div>
            </div>
        </div>
    `;
});