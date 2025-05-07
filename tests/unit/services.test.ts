import { createFolderService, getFoldersByName } from '../../services/folder.services';
import type { FolderSignature } from '../../services/folder.services';
import { database } from '../../database/config/config';
import { test, expect, describe } from 'bun:test'
import '../../database/migrations/migrations';

describe('Folder Services', () => {
  
  test('create folder', () => {
    const now = String(Date.now());
    createFolderService(now);
    const query = database.query(`SELECT name FROM folders WHERE name = @folder`);
    const folderName = query.get({folder: now}) as FolderSignature;
    expect(folderName.name).toBe(now);
  });

  test('get folder', () => {
    const now = String(Date.now());
    createFolderService(now);
    const folder = getFoldersByName(now) as FolderSignature;
    expect(folder.name).toBe(now);
  });
});