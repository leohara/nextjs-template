## husky の導入

### install

```bash
npm install --save-dev @commitlint/{config-conventional,cli}
```

### 設定ファイルの作成

プロジェクトのルートに `.commitlintrc.json` を作成

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

## コミット実行前に lint / commitlint する設定

commit 前に lint するために husky のフックを使用する

### husky のインストール

```bash
npm install husky --save-dev

npx husky init
```

### lint-staged のインストール

```bash
npm install --save-dev lint-staged
```

### commit 前に lint-staged を実行

`.husky/precommit` に作成

```bash
echo "npx lint-staged --concurrent false" > .husky/precommit
```

### commitlint を実行

```bash
echo "npx commitlint --edit ${1}" > .husky/commit-msg
```
