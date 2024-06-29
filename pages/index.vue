<template>
    <div class="grid grid-cols-4 gap-5 p-10 ">
        <aside class="pr-10 ">
            <h2 class="text-3xl font-semibold tracking-tight font-display">FILTRER MA RECHERCHE</h2>

            <div class="flex flex-col gap-4 font-sans mt-7 max-w-64">
                <div class="flex items-center justify-between px-4 py-3 rounded-md text-white bg-[#18495C]">
                    <p>Prêt à partir</p>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input id="switch" type="checkbox" checked="true" class="sr-only peer" />
                        <label for="switch" class="hidden"></label>
                        <div
                            class="peer h-6 w-11 rounded-full bg-[#8BA3AD] after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#4C7280] peer-checked:after:translate-x-full  peer-focus:ring-green-300">
                        </div>
                    </label>
                </div>
                <div class="flex items-center justify-between px-4 py-3 rounded-md text-white bg-[#18495C]">
                    <p>Zéro km</p>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input id="switch" type="checkbox" checked="true" class="sr-only peer" />
                        <label for="switch" class="hidden"></label>
                        <div
                            class="peer h-6 w-11 rounded-full bg-[#8BA3AD] after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#4C7280] peer-checked:after:translate-x-full  peer-focus:ring-green-300">
                        </div>
                    </label>
                </div>
                <div class="flex items-center justify-between px-4 py-3 rounded-md text-white bg-[#698995]">
                    <p>Promotions</p>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input id="switch" type="checkbox" class="sr-only peer" />
                        <label for="switch" class="hidden"></label>
                        <div
                            class="peer h-6 w-11 rounded-full bg-[#8BA3AD] after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#4C7280] peer-checked:after:translate-x-full  peer-focus:ring-green-300">
                        </div>
                    </label>
                </div>

                <h3 class="mt-5 font-sans text-lg font-medium text-text_primary">Budget</h3>
                <div class="inline-flex w-48 text-sm leading-none bg-white border border-[#18495C] rounded-lg text-text_primary">
                    <button class="inline-flex items-center text-white px-6 py-3 transition-colors duration-300 ease-in bg-[#18495C] rounded-l-lg focus:outline-none hover:text-blue-400 focus:text-blue-400 active" id="grid">
                    <span>Total</span>
                    </button>
                    <button class="inline-flex items-center px-6 py-3 transition-colors duration-300 ease-in rounded-r-lg focus:outline-none hover:text-blue-400 focus:text-blue-400" id="list">
                    <span>Mensuel</span>
                    </button>
                </div>
                <div class="w-full max-w-lg mx-auto text-center">
                    <input type="range" id="rangeInput" name="rangeInput" min="0" max="5000" step="1" value="50" class="accent-[#18495C] w-full h-2 bg-gray-300 rounded-full appearance-none">
                    <div class="flex justify-between text-sm font-medium text-text_primary">
                        <span id="minValue">100 €</span>
                        <span id="currentValue">2500 €</span>
                        <span id="maxValue">5000 €</span>
                    </div>
                </div>

                <hr class=" opacity-50 border-[#18495C]">
                
                <div class="flex items-center justify-between ">
                    <h3 class="mt-5 font-sans text-lg font-medium text-text_primary">Marque</h3>
                    <svg width="40px" height="40px" class="block" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9e9e9e" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#9e9e9e"></path> </g></svg>                
                </div>
                <div class="flex flex-col gap-2 text-sm">
                    <!-- radio buttons with labels on the left -->
                    <label class="inline-flex items-center">
                        <input type="radio" class="form-radio h-5 w-5 text-[#70B4C3] accent-[#70B4C3] focus:outline-none checked:outline-none" name="marque" value="toutes">
                        <span class="ml-2 text-text_primary">Toutes</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="radio" class="form-radio h-5 w-5 text-[#70B4C3] accent-[#70B4C3]" name="marque" value="dacia">
                        <span class="ml-2 text-text_primary">Dacia</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="radio" class="form-radio h-5 w-5 text-[#70B4C3] accent-[#70B4C3]" name="marque" value="nissan">
                        <span class="ml-2 text-text_primary">Nissan</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="radio" class="form-radio h-5 w-5 text-[#70B4C3] accent-[#70B4C3]" name="marque" value="renault">
                        <span class="ml-2 text-text_primary">Renault</span>
                    </label>
                </div>

            </div>
        </aside>
        <main class="col-span-3">
            <p>1356 résultats correspondant à votre recherche</p>
        </main>
    </div>
</template>