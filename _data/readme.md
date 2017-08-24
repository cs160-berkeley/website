# data

the website is rendered from these data files:

- `schedule.yaml` (output from `parse.rb`)
- `staff.yaml` (manually updated)

note that `parse.rb` uses the CS160Schedule.csv file, which is exported from
the Schedule spreadsheet in shared [Google Drive folder] for the class staff.
to update this CSV file, you can run the download script (`ruby download.rb`),
but that requires setting up an access token for the Google Drive API as
detailed [here](https://developers.google.com/drive/v3/web/quickstart/ruby).
specifically, it requires installing the `google-api-client` gem (which you can
do by running `bundle`), and the writing of the `client_secret.json` file
(setting up the auth is helped by running download for the first time, but only
after turning on the drive api as specified in the guide). once you do these
things, you should just be able to run `make` to pull the latest version.
further, if you want to auto-update the site from this, you can run `make
site`, which commits and pushes the newly downloaded data.

don't commit the client_secret!!! i added it to .gitignore.

