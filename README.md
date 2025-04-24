# honaipot

honaipot is a web application honeypot built using bolt.new, created by AI to serve as a decoy for attackers. The app is designed to mimic a real web dashboard, enticing unauthorized users to interact with fake data and download links that can be monitored for suspicious activity.

honaipot's goal is to attract unauthorized users by presenting a login-protected dashboard with easily guessable credentials. Once logged in, users see a realistic-looking dashboard populated with fake data. Crucially, file download links on the dashboard are embedded with canary tokens—unique, trackable links that alert defenders when accessed, providing early warning of a breach or unauthorized activity.
