echo "Building app..."
npm run build
echo "Deploy files to server..."
scp -r dist/* root@128.199.178.23:/var/www/html/
echo "Done!"