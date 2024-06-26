# React Web Readme

## 브랜치 컨벤션
- **main**: 무중단 배포를 위해 사용되는 브랜치에요. 버그 없는 안정적인 버전이 올라가야 하니 이 브랜치에는 절대 커밋 해서는 안됩니다.
- **develop**: 실제 개발되고 있는 서비스가 업데이트 되는 브랜치에요. 각 기능 브랜치에서 이 브랜치로 merge 된답니다.
- **{기능명}**: 기능마다 브랜치가 생성되요. 커밋 푸시 후 pull request를 하면 파트장이 확인 후 merge 합니다.

## 커밋 컨벤션
- **ADD**: 파일이나, 기능을 추가할 때
- **MOD**: 코드를 수정할 때, 또는 리팩토링
- **DEL**: 파일이나 코드를 삭제할 때
- **FIX**: 버그 픽스, 트러블슈팅
- **HOTFIX**: 긴급한 버그를 픽스


## React 폴더 구조
- **assets**: CSS 파일, 폰트, 이미지, 아이콘 등 컴포넌트 내부에서 사용하는 데이터가 저장됩니다.
- **data**: 더미데이터가 저장됩니다.
- **components**: 재사용 가능한 컴포넌트들이 저장됩니다.
- **pages**: Router를 이용하여 라우팅을 적용할 때 사용되는 페이지 입니다.


