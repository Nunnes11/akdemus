import * as FileSystem from "expo-file-system";

const DATA_DIRECTORY = FileSystem.documentDirectory;
const TERMS_PATH = DATA_DIRECTORY + "terms.json";
const SOLICITATIONS_PATH = DATA_DIRECTORY + "solicitations.json";

// Função genérica para ler dados de um arquivo JSON
export const readData = async (filePath) => {
  try {
    const fileExists = await FileSystem.getInfoAsync(filePath);

    if (!fileExists.exists) {
      console.log(`Arquivo não encontrado: ${filePath}`);
      return [];
    }

    const fileContent = await FileSystem.readAsStringAsync(filePath);
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Erro ao ler o arquivo ${filePath}:`, error);
    throw error;
  }
};

// Função genérica para escrever dados em um arquivo JSON
export const writeData = async (filePath, data) => {
  try {
    await FileSystem.writeAsStringAsync(filePath, JSON.stringify(data, null, 2));
    console.log(`Dados salvos em ${filePath}`);
  } catch (error) {
    console.error(`Erro ao salvar dados em ${filePath}:`, error);
    throw error;
  }
};

// Funções específicas para termos e solicitações
export const getTerms = () => readData(TERMS_PATH);
export const getSolicitations = () => readData(SOLICITATIONS_PATH);
export const saveSolicitation = async (newSolicitation) => {
  const solicitations = await getSolicitations();
  solicitations.push(newSolicitation);
  await writeData(SOLICITATIONS_PATH, solicitations);
};

export const saveDefinition = async (newDefinition) => {
  const definitions = await readData(DEFINITIONS_PATH);
  definitions.push(newDefinition);
  await writeData(DEFINITIONS_PATH, definitions);
};


