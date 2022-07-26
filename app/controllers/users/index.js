import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UsersIndexController extends Controller {
  @tracked isShowArchivedUsers = false;

  @action
  onToggleArchivedUsers(flag) {
    this.isShowArchivedUsers = flag;
  }
}
