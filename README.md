## 실행 방법
---

1. 해당된 레포지토리를 클론 및 해당 폴더 이동
   ```
   > git clone https://github.com/sanghyuk-2i/wanted-pre-onboarding-frontend.git
   > cd wanted-pre-onboarding-frontend
    ```
2. 필요한 패키지 설치
   ```
   > npm install
    ```
3. 필요한 환경변수 파일 생성 및 정보 입력
   - .env.development 파일 생성(로컬 환경)
   - .env.production 파일 생성(배포 환경)
  
   ``` shell
   // .env.development 파일 작성

    REACT_APP_ENDPOINT=http://localhost:8000

   // .env.production 파일 작성

    REACT_APP_ENDPOINT=https://pre-onboarding-selection-task.shop

    ```
4. 로컬 환경으로 실행
   
   ```
    npm start
    ```


## 데모 링크
---

https://wanted-pre-onboarding-frontend-rust.vercel.app/

