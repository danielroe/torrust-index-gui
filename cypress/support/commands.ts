import "../e2e/contexts/user/commands";
import "../e2e/contexts/torrent/commands";
import "../e2e/contexts/category/commands";
import "../e2e/common/commands";
import { TestTorrentInfo } from "../e2e/contexts/torrent/test_torrent_info";
import { RegistrationForm } from "../e2e/contexts/user/registration";

declare global {
  namespace Cypress {
    interface Chainable {
      // Common command
      go_to_settings(): Chainable<void>

      // User context: Registration
      register(registration_form: RegistrationForm): Chainable<void>
      register_as_admin(registration_form: RegistrationForm): Chainable<void>

      // User context: Authentication
      login(username: string, password: string): Chainable<void>
      logout(): Chainable<void>

      // User context: Others
      register_and_login(registration_form: RegistrationForm): Chainable<void>
      register_as_admin_and_login(registration_form: RegistrationForm): Chainable<void>
      delete_user_from_database(username: string): Chainable<void>

      // Torrent context
      upload_torrent(torrent_info: TestTorrentInfo): Chainable<void>
      delete_torrent_from_database_and_fixture(torrent_info: TestTorrentInfo, infohash: string): Chainable<void>

      // Category context
      delete_category_from_database(name: string): Chainable<void>
      add_category_to_database(name: string): Chainable<void>
    }
  }
}
