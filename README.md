# Health Square Admin Front page [React]

## 설치
client 폴더로 이동한 후,  `yarn install`

## 실행
`yarn start`

## 사용 기술 스택
- React + TypeScript
- 전역 상태 관리: Redux
- UI 관리: Material UI

## 디렉토리 구조
```
admin/client/src
├─components
│  ├─cmn (공통 컴포넌트 관리)
│  ├─layout (레이아웃 관련 컴포넌트 관리)
│  │  └─main (메인 화면 레이아웃)
│  ├─Login (로그인 관련 컴포넌트)
│  ├─menu (메뉴 관련 컴포넌트)
│  └─notice (공지사항 관련 컴포넌트)
├─hooks (커스텀훅 관리)
├─interface (타입 관리) 
│  ├─login
│  ├─menu
│  ├─notice
│  └─request
├─libs 
├─pages (각 페이지)
│  ├─company
│  ├─login
│  ├─main
│  └─notice
├─store (전역 상태 관리)
│  ├─backdrop
│  ├─login
│  ├─menu
│  └─notice
└─theme (전역 스타일 관리)
    └─overrides
```