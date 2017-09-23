.PHONY: build serve

build:
	if [ ! -d ./node_modules ]; \
	then yarn install; \
	fi

	if [ ! -d ./_source/_sass/vendor/_normalize.scss ]; \
	then cp -r ./node_modules/normalize.css/normalize.css ./_source/_sass/vendor/_normalize.scss; \
	fi

	if [ ! -d ./_source/scripts/vendor/picturefill.min.js ]; \
	then cp -r ./node_modules/picturefill/dist/picturefill.min.js ./_source/scripts/vendor/picturefill.min.js; \
	fi
