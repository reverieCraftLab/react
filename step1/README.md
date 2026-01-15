# React Counter App - Step 1

React의 **State 관리** 기초를 학습하는 프로젝트입니다. `useState` Hook을 활용하여 상태 관리와 이벤트 처리를 실습합니다.

## 프로젝트 목표

- React의 `useState` Hook 이해하기
- 함수형 컴포넌트에서 상태 관리 구현
- 컴포넌트 재사용성과 독립적인 상태 관리 학습
- 이벤트 핸들링 및 상태 업데이트 패턴 이해

## 주요 기능

### 1. 독립적인 State를 가진 카운터 버튼
```jsx
// 각 MyButton 컴포넌트는 독립적인 count 상태를 유지
<MyButton />  // count: 0
<MyButton />  // count: 0 (서로 영향을 주지 않음)
```

### 2. Props를 통한 상태 공유 (주석 처리)
부모 컴포넌트에서 상태를 관리하고 Props로 전달하는 방식도 구현되어 있습니다.

## 기술 스택

| 기술 | 버전 | 설명 |
|------|------|------|
| **React** | ^19.2.0 | UI 라이브러리 |
| **React DOM** | ^19.2.0 | React 렌더링 엔진 |
| **Vite** | ^7.2.4 | 번들러 & 개발 서버 |
| **ESLint** | ^9.39.1 | 코드 품질 관리 |

## 프로젝트 구조

```
step1/
├── src/
│   ├── main.jsx           # 엔트리 포인트
│   ├── App.jsx            # 메인 컴포넌트 (Counter 로직)
│   ├── App.css            # 컴포넌트 스타일
│   ├── index.css          # 전역 스타일
│   └── assets/            # 정적 자산
├── public/                # 공개 파일
├── index.html             # HTML 템플릿
├── package.json           # 프로젝트 설정
├── vite.config.js         # Vite 설정
└── eslint.config.js       # ESLint 규칙
```


## 라이선스

이 프로젝트는 학습 목적으로 만들어졌습니다.

---

