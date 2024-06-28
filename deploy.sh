echo "Building app..."
npm run build
echo "Deploy files to server..."
scp -r dist/* root@137.184.153.35:/var/www/html/
echo "Done!"