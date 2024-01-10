import { DonatingCard } from '../DonatingCard'
import { StickerButton } from '../DonatingCard/components/StickerButton'
import redBookCode from '@/assets/redBook-code.jpg'
import InfoPanel from '@/components/InfoPanel'
import Tooltip from '@/components/Tooltip'
import { infoPanelStateAtom } from '@/store'
import type { InfoPanelType } from '@/typings'
import { recordOpenInfoPanelAction } from '@/utils'
import { useAtom } from 'jotai'
import type React from 'react'
import { useCallback } from 'react'
import IconMail from '~icons/material-symbols/mail'
import IconCoffee2 from '~icons/mdi/coffee'
import IconXiaoHongShu from '~icons/my-icons/xiaohongshu'
import IconTwitter from '~icons/ri/twitter-fill'
import IconGithub from '~icons/simple-icons/github'
import IconVisualstudiocode from '~icons/simple-icons/visualstudiocode'
import IconWechat2 from '~icons/simple-icons/wechat'
import IconWechat from '~icons/tabler/brand-wechat'
import IconCoffee from '~icons/tabler/coffee'
import IconTerminal2 from '~icons/tabler/terminal-2'
import IconFlagChina from '~icons/twemoji/flag-china'

const Footer: React.FC = () => {
  const [infoPanelState, setInfoPanelState] = useAtom(infoPanelStateAtom)

  const handleOpenInfoPanel = useCallback(
    (modalType: InfoPanelType) => {
      recordOpenInfoPanelAction(modalType, 'footer')
      setInfoPanelState((state) => ({ ...state, [modalType]: true }))
    },
    [setInfoPanelState],
  )

  const handleCloseInfoPanel = useCallback(
    (modalType: InfoPanelType) => {
      setInfoPanelState((state) => ({ ...state, [modalType]: false }))
    },
    [setInfoPanelState],
  )

  return (
    <>
      <InfoPanel
        openState={infoPanelState.donate}
        title="Buy us a coffee"
        icon={IconCoffee}
        buttonClassName="bg-amber-500 hover:bg-amber-400"
        iconClassName="text-amber-500 bg-amber-100 dark:text-amber-300 dark:bg-amber-500"
        onClose={() => handleCloseInfoPanel('donate')}
      >
        <p className="indent-4 text-sm text-gray-500 dark:text-gray-300">
          非常感谢大家使用 Qwerty Learner，目前该网站使用业余时间在维护，为了保证网站能够持续地提供给大家高质量的服务，我们需要您的帮助！
          <br />
          您的捐款将有助于我们支付网站的运营成本，改进网站的功能和设计，并提高用户体验。
          <br />
        </p>
        <br />
        <p className="indent-4 text-sm text-gray-700 dark:text-gray-200">
          我们相信，共同的努力可以让 Qwerty Learner 成为更好的学习平台，也相信您的支持将给予我们持续前进的动力。 感谢您的支持！
        </p>
        <br />
        <p className="indent-4 text-sm text-gray-700 dark:text-gray-200">
          为了感谢您的慷慨，单次 50 rmb 及以上的捐赠， 我们将回赠 Qwerty 的定制贴纸 5 枚<span className="text-xs">（仅限大陆地区）</span>
          ，希望您可以跟朋友分享您的快乐
        </p>
        <div className="flex items-center justify-center py-2">
          <StickerButton className="" />
        </div>

        <DonatingCard />
      </InfoPanel>

      <InfoPanel
        openState={infoPanelState.vsc}
        title="VSCode 摸🐟插件"
        icon={IconTerminal2}
        buttonClassName="bg-sky-500 hover:bg-sky-400"
        iconClassName="text-sky-500 bg-sky-100 dark:text-sky-300 dark:bg-sky-500"
        onClose={() => handleCloseInfoPanel('vsc')}
      >
        <p className="text-sm text-gray-500  dark:text-gray-400">
          我们根据大家的建议开发了 VSCode 插件，支持一键启动，随时开始背单词。
          可以在任意文件中一键开启，开启后单词显示在状态栏中，且插件会拦截用户对文档的输入，不会影响到原始文档。
        </p>
        <br /> <br />
        <a className="mr-5 underline dark:text-gray-300" href="https://github.com/Kaiyiwing/qwerty-learner-vscode">
          GitHub 项目
        </a>
        <a className="underline dark:text-gray-300" href="https://marketplace.visualstudio.com/items?itemName=Kaiyi.qwerty-learner">
          VSCode 插件链接
        </a>
        <br />
      </InfoPanel>

      <footer className="mb-1 mt-4 flex w-full items-center justify-center gap-2.5 text-sm ease-in" onClick={(e) => e.currentTarget.blur()}>
        <a href="https://github.com/Kaiyiwing/qwerty-learner" target="_blank" rel="noreferrer" aria-label="前往 GitHub 项目主页">
          <IconGithub fontSize={15} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100" />
        </a>

        <a href="https://twitter.com/real_kai42" target="_blank" title="x" rel="noreferrer">
          <IconTwitter fontSize={16} className="text-gray-500 hover:text-[#1DA1F2] dark:text-gray-400 dark:hover:text-[#1DA1F2]" />
        </a>
        <button
          className="cursor-pointer focus:outline-none "
          type="button"
          onClick={(e) => {
            handleOpenInfoPanel('donate')
            e.currentTarget.blur()
          }}
          aria-label="考虑捐赠我们"
        >
          <IconCoffee2 fontSize={16} className="text-gray-500 hover:text-amber-500 dark:text-gray-400 dark:hover:text-amber-500" />
        </button>

        <button
          className="cursor-pointer focus:outline-none"
          type="button"
          onClick={(e) => {
            handleOpenInfoPanel('vsc')
            e.currentTarget.blur()
          }}
          aria-label="使用 Visual Studio Code 插件版 Qwerty Learner"
        >
          <IconVisualstudiocode fontSize={14} className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-500" />
        </button>

        <a
          href="mailto:me@kaiyi.cool"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.currentTarget.blur()}
          aria-label="发送邮件到 me@kaiyi.cool"
        >
          <IconMail fontSize={16} className="text-gray-500 hover:text-indigo-400 dark:text-gray-400 dark:hover:text-indigo-400" />
        </a>

        <button
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          type="button"
          onClick={(e) => {
            handleOpenInfoPanel('donate')
            e.currentTarget.blur()
          }}
        >
          @ Qwerty Learner
        </button>

        <span className="select-none rounded bg-slate-200 px-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          Build <span className="select-all">{LATEST_COMMIT_HASH}</span>
        </span>
      </footer>
    </>
  )
}

export default Footer
