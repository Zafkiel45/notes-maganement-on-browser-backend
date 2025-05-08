import { test, mock, expect } from 'bun:test';
import { createFolder } from '../../controllers/folders.controller';
import { createFolderService, getFoldersByName } from '../../services/folder.services';

const invalidCases = [
  null,undefined,'','   ',
  '\n','\t',0,-1,
  1,true,false,[],
  ['abc'],{},{ name: 'abc' },
  Symbol('abc'),() => 'abc','../folder',
  '<script>','SELECT *'
];

await mock.module('../../services/folder.services', () => ({
  createFolderService: mock(),
  getFoldersByName: mock(),
}));

test.each(invalidCases)('createFolder returns 400 code with %p', async (c) => {
  const req = {body: { folderName: c} as any} as any;
  const sendStatus = mock();
  const res = { sendStatus } as any;
  createFolder(req, res);

  expect(sendStatus).toHaveBeenCalledWith(400);

  expect(getFoldersByName).not.toHaveBeenCalled();
  expect(createFolderService).not.toHaveBeenCalled();
}, 5000);