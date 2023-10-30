import {
  addFileToBranch,
  createBranch,
  createPullRequest,
  deleteFileFromBranch,
  mergeBranch,
  updateFileFromBranch,
} from "./gh-api-utils";
import fs from "fs";

const owner = "Diego-HC";
const repo = "github-api-tests";
const baseBranch = "main";
const newBranch = "test-branch";
const token = process.env.GITHUB_TOKEN!;

const filePath = "images/Untitled.png";
const fileContent = fs.readFileSync(filePath);

// createBranch(owner, repo, baseBranch, newBranch, token);

addFileToBranch(
  owner,
  repo,
  newBranch,
  filePath,
  fileContent,
  "test commit",
  token
);

// updateFileFromBranch(
//   owner,
//   repo,
//   newBranch,
//   filePath,
//   fileContent,
//   "test commit",
//   token
// );

// deleteFileFromBranch(owner, repo, newBranch, filePath, "test commit", token);

// mergeBranch(owner, repo, baseBranch, newBranch, token);

// createPullRequest(
//   owner,
//   repo,
//   baseBranch,
//   newBranch,
//   "test pull request",
//   "test pull request body",
//   token
// );
