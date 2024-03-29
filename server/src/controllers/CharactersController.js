import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { charactersService } from "../services/CharactersService.js";

export class CharactersController extends BaseController {
  constructor() {
    super('api/characters')
    this.router
      .get('', this.getAllCharacters)
      .get('/:characterId', this.getCharacterById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createCharacter)
      .put('/:characterId', this.updateCharacter)
      .delete('/:characterId')
  }

  async getAllCharacters(req, res, next) {
    try {
      const characters = await charactersService.getAllCharacters()
      res.send(characters)
    } catch (error) {
      next(error)
    }
  }

  async getCharacterById(req, res, next) {
    try {
      const characterId = req.params.characterId
      const character = await charactersService.getCharacterById(characterId)
      res.send(character)
    } catch (error) {
      next(error)
    }
  }

  async createCharacter(req, res, next) {
    try {
      const user = req.userInfo
      const characterData = req.body
      characterData.creatorId = user.id
      const character = await charactersService.createCharacter(characterData)
      res.send(character)
    } catch (error) {
      next(error)
    }
  }

  async updateCharacter(req, res, next) {
    try {
      const user = req.userInfo
      const characterData = req.body
      const characterId = req.params.characterId
      const character = await charactersService.updateCharacter(characterId, characterData, user.id)
      res.send(character)
    } catch (error) {
      next(error)
    }
  }
}