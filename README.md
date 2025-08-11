<p align="center">
<a href="https://github.com/WANGZISHU-VORTEX/DeskNest" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="DeskNest Logo" /></a>
</p>


<p align="center">NestJSで構築されたスマートなデスク予約システムで、現代的なチームのオフィスワークスペース管理を簡素化します。</p>

<p align="center">
<a href="https://github.com/WANGZISHU-VORTEX/DeskNest" target="_blank"><img src="https://img.shields.io/github/stars/WANGZISHU-VORTEX/DeskNest.svg?style=social" alt="GitHub Stars" /></a>
<a href="https://github.com/WANGZISHU-VORTEX/DeskNest/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-All%20Rights%20Reserved-red.svg" alt="License" /></a>
<a href="https://nodejs.org" target="_blank"><img src="https://img.shields.io/node/v/@nestjs/core.svg" alt="Node Version" /></a>
</p>

## 概要

DeskNest は、チームが効率的にデスクの予約、追跡、最適化を行うために設計された合理化されたオフィスワークスペース予約システムです。NestJSフレームワークを基盤に構築されており、RESTful API を備えたスケーラブルなバックエンドを提供し、フロントエンドインターフェースや既存のオフィス管理ツールとのシームレスな統合を可能にします。

主な機能は以下の通りです：

- リアルタイムのデスク稼働状況追跡
- ユーザーフレンドリーな予約ワークフロー
- 重複予約の防止機能
- ワークスペース最適化のための使用状況分析
- ロールベースのアクセス制御（管理者 / 一般ユーザー）

## プロジェクトセットアップ

前提条件

- Node.js (v16 以上)
- npm または yarn
- MySQL（または任意のデータベース）
- 環境変数ファイル（`.env`）：データベース接続情報やAPIポート等を設定（サンプルは `.env.example` を参照）

## インストール

```bash
# リポジトリをクローン
git clone git@github.com:WANGZISHU-VORTEX/DeskNest.git
cd DeskNest/api

# 依存関係をインストール
npm install
```

## 設定

環境変数の例ファイルをコピーし、設定を更新します：

```bash
cp .env.example .env  # サンプルファイルをコピーして編集
```

## アプリケーションの実行

```bash
# 開発モード（ホットリロード付き）
npm run start:dev

# 本番モード
npm run build
npm run start:prod
```

デフォルトでは API は http://localhost:3000 で利用可能です。ポートを確認するにはsrc/main.tsまたは.envファイルを確認してください。

## API ドキュメント

アプリケーションの実行中は、自動生成された API ドキュメントにアクセスできます：

Swagger UI: http://localhost:3000/api

OpenAPI 仕様: http://localhost:3000/api-json

## デプロイ

本番環境へのデプロイについては、ベストプラクティスについてはNestJS デプロイガイドを参照してください。一般的なオプションは以下の通りです：

## Docker によるコンテナ化

クラウドプラットフォームへのデプロイ（AWS、Azure、GCP）

サーバーレスフレームワークの使用（AWS Lambda）

リポジトリにはコンテナ化を簡素化するサンプルDockerfileが含まれています。

## プロジェクト構造

```
src/
├── config/           # 設定ファイルと環境セットアップ
├── modules/          # 機能モジュール（デスク、予約、ユーザーなど）
│   ├── desks/        # デスク管理ロジック
│   ├── bookings/     # 予約処理
│   └── users/        # ユーザー認証と認可
├── common/           # 共有ユーティリティ、ガード、インターセプター
├── prisma/           # データベーススキーマとORM（Prismaを使用する場合）
└── main.ts           # アプリケーションエントリーポイント
```

## 貢献について

本リポジトリは企業内部研修用プロジェクトです。ソースコードの参照は可能ですが、クローンやブランチの作成については以下の方針に従ってください：

- 内部メンバーのみが直接の変更を行うことができます
- 学習目的でのコード参照は許可されています
- 外部への再配布や商用利用は禁止されています
- 必要がある場合は、管理者に連絡して許可を得てから操作を行ってください

## ライセンス

本プロジェクトは企業内部研修用として開発されており、All Rights Reservedに基づいてライセンスされています。

ソースコードの閲覧は許可されていますが、事前の書面による許可なしに、複製、修正、再配布することは禁止されています。

本ソフトウェアの使用は、企業内部の研修目的に限定されます。

## 連絡先

リポジトリ: https://github.com/WANGZISHU-VORTEX/DeskNest

問題点: https://github.com/WANGZISHU-VORTEX/DeskNest/issues