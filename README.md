# gh-pages — 리다이렉트 shim 전용 브랜치

이 브랜치엔 블로그 소스가 없다. `main`에 있다. (블로그는 Vercel에서 `www.bohyunjung.com`으로 서빙)

## 왜 있나

예전에 이 레포의 GitHub Pages에 커스텀 도메인(`bohyunjung.com`)이 걸려 있었다.
그러면 GitHub이 `bohyunjung.github.io/*` **전체**를 그 도메인으로 301 보내는데,
정작 DNS는 Vercel을 가리키고 있어서 아무 데도 도달하지 못했다.
게다가 그 리다이렉트가 계정의 **모든 프로젝트 페이지**(`bohyunjung.github.io/<repo>/`)를 막았다.

그래서 커스텀 도메인 설정은 제거하고, 리다이렉트만 콘텐츠로 직접 구현했다.

## 구성

- `index.html` — 루트를 `www.bohyunjung.com`으로
- `404.html` — 그 외 모든 경로를 path/query/hash 유지한 채로
- `.nojekyll` — Jekyll 빌드 생략

## 주의

- 서버사이드 301이 **아니다.** meta refresh + JS 기반이라 루트는 200, 그 외는 404 상태코드로 나간다.
  진짜 301이 필요하면 커스텀 도메인을 다시 걸어야 하는데, 그러면 프로젝트 페이지가 전부 막힌다. 양자택일.
- 프로젝트 페이지는 유저 페이지보다 우선이라 `bohyunjung.github.io/public-assets/` 같은 건 이 shim에 안 걸린다.
- Pages 설정은 `build_type: legacy` + source `gh-pages` / `/` 여야 한다.
  `workflow`로 바뀌면 이 브랜치는 배포되지 않는다.
