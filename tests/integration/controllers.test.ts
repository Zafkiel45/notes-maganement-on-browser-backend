import { test, mock, expect } from 'bun:test';
import { createFolder } from '../../controllers/folders.controller';
import { createFolderService, getFoldersByName } from '../../services/folder.services';

mock.module('../../services/folder.services', () => ({
  createFolderService: mock(),
  getFoldersByName: mock(),
}));

test('prevent folderCreateService to be called with invalid name', () => {
  const req = {body: { folderName: 1} as any} as any;
  const sendStatus = mock();
  const res = { sendStatus } as any;
  
  createFolder(req, res);

  expect(sendStatus).toHaveBeenCalledWith(400);

  expect(getFoldersByName).not.toHaveBeenCalled();
  expect(createFolderService).not.toHaveBeenCalled();
});